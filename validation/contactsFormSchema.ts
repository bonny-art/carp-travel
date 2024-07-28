import { CONTACTS } from "@/constants";
import * as yup from "yup";

export const contactsFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, CONTACTS.form.name.error)
    .required(CONTACTS.form.name.absent),
  email: yup
    .string()
    .email(CONTACTS.form.email.error)
    .required(CONTACTS.form.email.absent),
  message: yup.string().required(CONTACTS.form.message.absent),
});
