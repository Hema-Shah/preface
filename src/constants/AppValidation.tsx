const email = (email: string) =>
  email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const password = (password: string | any[], canBeEmpty: any) =>
  canBeEmpty
    ? password
      ? password.length <= 30
      : true
    : password && password.length <= 30;
const noEmpty = (value: any) => !!value;

const updatePassword = (
  currentPassword: string | any[],
  password: string | any[],
) => {
  if ((currentPassword && !password) || (!currentPassword && !password)) {
    return true;
  } else if (!currentPassword && password) {
    return false;
  } else {
    return currentPassword.length <= 30 && password.length <= 30;
  }
};

export const FIELD_VALIDATIONS = {
  email,
  password,
  updatePassword,
  noEmpty,
};
