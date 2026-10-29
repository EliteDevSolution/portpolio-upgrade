export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-5xl font-semibold">404</p>
      <h1 className="mt-3 text-xl text-[var(--fg)]">Page Not Found</h1>
      <p className="mt-2 text-[var(--muted)]">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
