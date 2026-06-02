export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gradient-bg">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-16 w-16 rounded-2xl loading-shimmer" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-pulse rounded-full bg-primary/30" />
          </div>
        </div>
        <div className="space-y-2 text-center">
          <div className="mx-auto h-4 w-32 rounded-full loading-shimmer" />
          <div className="mx-auto h-3 w-48 rounded-full loading-shimmer" />
        </div>
      </div>
    </div>
  );
}
