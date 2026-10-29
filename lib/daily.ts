import { cacheLife } from "next/cache";

export type DailyPost = {
  id: string;
  title: string;
  summary: string;
  permalink: string;
  image: string;
  published: string;
  readTime: number | null;
  source: string;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatPublished(iso: string) {
  const [year, month, day] = iso.slice(0, 10).split("-");
  return `${months[Number(month) - 1]} ${Number(day)}, ${year}`;
}

const query = `
  query DailyNews($first: Int) {
    page: anonymousFeed(first: $first, ranking: TIME) {
      edges {
        node {
          id
          title
          summary
          permalink
          image
          createdAt
          readTime
          source { name }
        }
      }
    }
  }
`;

export async function getDailyPosts(): Promise<DailyPost[]> {
  "use cache";
  cacheLife("hours");

  const response = await fetch("https://api.daily.dev/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables: { first: 12 } }),
  });

  if (!response.ok) {
    throw new Error("daily.dev request failed");
  }

  const payload = (await response.json()) as {
    data?: {
      page?: {
        edges?: Array<{
          node: {
            id: string;
            title: string;
            summary?: string | null;
            permalink: string;
            image?: string | null;
            createdAt: string;
            readTime?: number | null;
            source?: { name?: string | null } | null;
          };
        }>;
      };
    };
  };

  return (payload.data?.page?.edges ?? []).map(({ node }) => ({
    id: node.id,
    title: node.title,
    summary: node.summary ?? "",
    permalink: node.permalink,
    image: node.image ?? "",
    published: formatPublished(node.createdAt),
    readTime: node.readTime ?? null,
    source: node.source?.name ?? "daily.dev",
  }));
}
