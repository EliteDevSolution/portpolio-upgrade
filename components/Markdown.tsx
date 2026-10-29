function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.replace(/\r\n/g, "\n").trim().split(/\n{2,}/);

  return (
    <div className="max-w-3xl space-y-3 text-[13px] leading-6 text-[var(--body)]">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("## ")) {
          const title = trimmed.replace(/^## /, "");
          return (
            <h2
              key={index}
              id={slugify(title)}
              className="pt-3 text-base font-semibold tracking-tight text-[var(--fg)]"
            >
              {renderInline(title)}
            </h2>
          );
        }
        if (trimmed === "---") {
          return <hr key={index} className="border-[var(--line)]" />;
        }
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={index} className="list-disc space-y-3 pl-5">
              {items.map((item) => (
                <li key={item}>{renderInline(item.replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{renderInline(trimmed)}</p>;
      })}
    </div>
  );
}
