import { InfoIcon } from "./Icons";

export function EmptyState() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <p className="flex items-center gap-2 text-xl font-semibold tracking-tight">
        <InfoIcon className="size-6" />
        Work in progress
      </p>
    </div>
  );
}
