import content from "@/public/data/content.json";
import * as yup from "yup";

export const contactsFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, content.CONTACTS.form.name.error)
    .required(content.CONTACTS.form.name.absent),
  email: yup
    .string()
    .email(content.CONTACTS.form.email.error)
    .required(content.CONTACTS.form.email.absent),
  message: yup.string().required(content.CONTACTS.form.message.absent),
});
