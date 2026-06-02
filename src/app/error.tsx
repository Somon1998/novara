"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-xl font-bold text-foreground">Ошибка загрузки</h2>
      <p className="max-w-md text-sm text-muted">
        {error.message || "Попробуйте обновить страницу."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white"
      >
        Обновить
      </button>
    </div>
  );
}
