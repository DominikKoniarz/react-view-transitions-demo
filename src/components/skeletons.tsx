export function MetadataSkeleton() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 border-t border-white/10 pt-8 animate-pulse">
      <div className="space-y-3">
        <div className="h-8 w-48 bg-white/10 rounded" />
        <div className="h-4 w-32 bg-white/5 rounded" />
        <div className="h-4 w-40 bg-white/5 rounded" />
        <div className="h-5 w-20 bg-white/5 rounded mt-2" />
      </div>
      <div className="flex items-center gap-3">
        <div className="h-9 w-36 bg-white/5 rounded border border-white/5" />
        <div className="h-9 w-36 bg-white/5 rounded border border-white/5" />
      </div>
    </div>
  );
}
