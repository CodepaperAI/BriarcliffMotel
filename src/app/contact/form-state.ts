import type { FieldErrors } from "@/lib/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: FieldErrors;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
};
