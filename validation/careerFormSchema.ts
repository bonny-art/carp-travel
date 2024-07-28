import { CAREER } from "@/constants";
import * as yup from "yup";

export const careerFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, CAREER.form.name.error)
    .required(CAREER.form.name.absent),
  email: yup
    .string()
    .email(CAREER.form.email.error)
    .required(CAREER.form.email.absent),
  position: yup.string().required(CAREER.form.position.absent),
  phone: yup
    .string()
    .matches(/^\d{10}$/, CAREER.form.phone.error)
    .required(CAREER.form.phone.absent),
  message: yup.string(),
  agreement: yup.boolean().oneOf([true]),
});
