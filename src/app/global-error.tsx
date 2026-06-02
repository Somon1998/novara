"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-950 p-6 text-center text-white">
        <h1 className="text-2xl font-bold">Что-то пошло не так</h1>
        <p className="max-w-md text-sm text-gray-400">
          {error.message || "Не удалось загрузить страницу."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold hover:bg-violet-500"
        >
          Попробовать снова
        </button>
      </body>
    </html>
  );
}
