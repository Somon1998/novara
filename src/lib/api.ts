import type { AppointmentFormData } from "@/types";

/**
 * Placeholder API layer — подключите backend здесь.
 *
 * Пример будущей интеграции:
 * 1. Создайте Route Handler: src/app/api/appointments/route.ts
 * 2. Замените submitAppointment на fetch('/api/appointments', { method: 'POST', body })
 * 3. Добавьте переменные окружения в .env.local (NEXT_PUBLIC_API_URL)
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function submitAppointment(
  data: AppointmentFormData
): Promise<{ success: boolean; message: string }> {
  if (!API_BASE_URL) {
    return {
      success: true,
      message: "Backend не подключён. Заявка сохранена локально (mock).",
    };
  }

  const response = await fetch(`${API_BASE_URL}/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Не удалось отправить заявку");
  }

  return response.json();
}

export async function fetchDoctors() {
  if (!API_BASE_URL) return null;

  const response = await fetch(`${API_BASE_URL}/doctors`);
  if (!response.ok) throw new Error("Не удалось загрузить врачей");
  return response.json();
}

export async function fetchServices() {
  if (!API_BASE_URL) return null;

  const response = await fetch(`${API_BASE_URL}/services`);
  if (!response.ok) throw new Error("Не удалось загрузить услуги");
  return response.json();
}
