import content from "@/public/data/content.json";
import * as yup from "yup";

export const contactsFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, content.contacts.form.name.error)
    .required(content.contacts.form.name.absent),
  email: yup
    .string()
    .email(content.contacts.form.email.error)
    .required(content.contacts.form.email.absent),
  message: yup.string().required(content.contacts.form.message.absent),
});
