import content from "@/public/data/content.json";
import * as yup from "yup";

export const careerFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, content.career.form.name.error)
    .required(content.career.form.name.absent),
  email: yup
    .string()
    .email(content.career.form.email.error)
    .required(content.career.form.email.absent),
  position: yup.string().required(content.career.form.position.absent),
  phone: yup
    .string()
    .matches(/^\d{10}$/, content.career.form.phone.error)
    .required(content.career.form.phone.absent),
  message: yup.string(),
  agreement: yup.boolean().oneOf([true]),
});
