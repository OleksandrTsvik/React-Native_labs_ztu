import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .email("Некоректна електронна пошта")
      .required("Електронна пошта є обов’язковим полем"),
    password: yup
      .string()
      .min(6, "Пароль має містити принаймні 6 символів")
      .required("Пароль є обов’язковим полем"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Паролі повинні співпадати"),
    lastName: yup.string().required("Прізвище є обов’язковим полем"),
    firstName: yup.string().required("Ім’я є обов’язковим полем"),
  })
  .required();
