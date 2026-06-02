import type { AppointmentFormData, AppointmentFormErrors } from "@/types";
import type { Messages } from "@/i18n/types";

export function validateAppointmentForm(
  data: AppointmentFormData,
  validation: Messages["validation"]
): AppointmentFormErrors {
  const errors: AppointmentFormErrors = {};

  if (!data.name.trim()) {
    errors.name = validation.nameRequired;
  } else if (data.name.trim().length < 2) {
    errors.name = validation.nameMin;
  }

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (!data.phone.trim()) {
    errors.phone = validation.phoneRequired;
  } else if (phoneDigits.length < 9) {
    errors.phone = validation.phoneInvalid;
  }

  if (!data.service) {
    errors.service = validation.serviceRequired;
  }

  if (data.message.length > 500) {
    errors.message = validation.messageMax;
  }

  return errors;
}

export function hasErrors(errors: AppointmentFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
