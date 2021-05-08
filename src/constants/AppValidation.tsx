const email = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim());

export const FIELD_VALIDATIONS = {
  email,
};
