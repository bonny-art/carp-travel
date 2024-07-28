import content from "@/public/data/content.json";
import * as yup from "yup";

export const careerFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, content.CAREER.form.name.error)
    .required(content.CAREER.form.name.absent),
  email: yup
    .string()
    .email(content.CAREER.form.email.error)
    .required(content.CAREER.form.email.absent),
  position: yup.string().required(content.CAREER.form.position.absent),
  phone: yup
    .string()
    .matches(/^\d{10}$/, content.CAREER.form.phone.error)
    .required(content.CAREER.form.phone.absent),
  message: yup.string(),
  agreement: yup.boolean().oneOf([true]),
});
