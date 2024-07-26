import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Image from "next/image";
import { CAREER } from "@/constants";
import useResponsive from "@/hooks/useResponsive";

type CareerFormValues = {
  name: string;
  email: string;
  position: string;
  phone: string;
  message?: string;
  agreement: boolean;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, "Incorrect name")
    .required("Name is required"),
  email: yup.string().email("Incorrect e-mail").required("E-mail is required"),
  position: yup.string().required("Position is required"),
  phone: yup
    .string()
    .matches(/^\d{9}$/, "Incorrect phone")
    .required("Phone is required"),
  message: yup.string(),
  agreement: yup.boolean().oneOf([true]),
});

const formatPhoneNumber = (value: string): string => {
  if (!value) return value;
  const phoneNumber = value.replace(/\D/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  if (phoneNumberLength < 8) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      5
    )} ${phoneNumber.slice(5)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    5
  )} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 10)}`;
};

const CareerForm: React.FC = () => {
  const { isTablet } = useResponsive();
  const [isChecked, setIsChecked] = useState(false);
  const [formattedPhone, setFormattedPhone] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<CareerFormValues>({
    defaultValues: {
      name: "",
      email: "",
      position: "",
      phone: "",
      message: "",
      agreement: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CareerFormValues> = (data) => {
    console.log(data);
  };

  const toggleCheckbox = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setValue("agreement", newCheckedState, { shouldValidate: true });
    trigger("agreement");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const cleanedInput = input.replace(/\D/g, "");
    setFormattedPhone(formatPhoneNumber(cleanedInput));
    setValue("phone", cleanedInput, { shouldValidate: true });
    trigger("phone");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flexStart flex-col gap-4 md:gap-[9px]"
    >
      <div className="flexStart flex-col gap-4 md:flex-row md:gap-5">
        <div className="flexStart flex-col gap-4 lg:gap-6 w-[222px] lg:w-[290px]">
          {/* NAME */}
          <div className="flexStart flex-col gap-1 relative">
            <label
              className={`extraLight-12-24-20 ${
                errors.name ? "text-orange-50" : ""
              }`}
            >
              {CAREER.form.name.label}
            </label>
            <input
              type="text"
              placeholder="John Smith"
              {...register("name")}
              onBlur={() => trigger("name")}
              className={`block w-full lg:h-7 px-2  bg-white/5 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } placeholder:text-white/20`}
            />
            {errors.name && (
              <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
                <Image
                  src={"/incorrect.svg"}
                  alt={"incorrect-icon"}
                  width={18}
                  height={18}
                />
                {errors.name.message}
              </span>
            )}
          </div>

          {/* EMAIL */}
          <div className="flexStart flex-col gap-1 relative">
            <label
              className={`extraLight-12-24-20 ${
                errors.email ? "text-orange-50" : ""
              }`}
            >
              {CAREER.form.email.label}
            </label>
            <input
              type="email"
              placeholder="johnsmith@email.com"
              {...register("email")}
              onBlur={() => trigger("email")}
              className={`block w-full lg:h-7 px-2  bg-white/5 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } placeholder:text-white/20`}
            />
            {errors.email && (
              <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
                <Image
                  src={"/incorrect.svg"}
                  alt={"incorrect-icon"}
                  width={18}
                  height={18}
                />
                {errors.email.message}
              </span>
            )}
          </div>

          {/* POSITION */}
          <div className="flexStart flex-col gap-1 relative">
            <label
              className={`extraLight-12-24-20 ${
                errors.position ? "text-orange-50" : ""
              }`}
            >
              {CAREER.form.position.label}
            </label>
            <input
              type="text"
              placeholder="Movie maker"
              {...register("position")}
              onBlur={() => trigger("position")}
              className={`block w-full lg:h-7 px-2  bg-white/5 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } placeholder:text-white/20`}
            />
            {errors.position && (
              <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
                <Image
                  src={"/incorrect.svg"}
                  alt={"incorrect-icon"}
                  width={18}
                  height={18}
                />
                {errors.position.message}
              </span>
            )}
          </div>

          {/* PHONE */}
          <div className="flexStart flex-col gap-1 relative">
            <label
              className={`extraLight-12-24-20 ${
                errors.phone ? "text-orange-50" : ""
              }`}
            >
              {CAREER.form.phone.label}
            </label>
            <span className="extraLight-13-24-0 lg:extraLight-20-24-0 absolute bottom-0 lg:bottom-0.5 left-2">
              {CAREER.form.phone.placeholder.code}
            </span>
            <input
              type="text"
              placeholder={CAREER.form.phone.placeholder.number}
              value={formattedPhone}
              onChange={handlePhoneChange}
              className={`block w-full lg:h-7 pr-2 pl-10 lg:pl-[57px] bg-white/5 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } placeholder:text-white/20`}
            />
            {errors.phone && (
              <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
                <Image
                  src={"/incorrect.svg"}
                  alt={"incorrect-icon"}
                  width={18}
                  height={18}
                />
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* MESSAGE */}
        <div className="flexStart flex-col gap-1 md:w-[221px] lg:w-[292px]">
          <label className="extraLight-12-24-20">Message</label>
          <textarea
            placeholder=""
            {...register("message")}
            onBlur={() => trigger("message")}
            className="block w-full h-[196px] md:h-[228px] lg:h-[268px] px-2  bg-white/5 extraLight-13-24-0 lg:extraLight-20-24-0 resize-none focus:outline-none focus:ring-[1px] focus:ring-white/50 "
          />
        </div>
      </div>

      <div className="flexStart flex-col gap-4 md:flex-row md:gap-5 md:flexBetween">
        {/* AGREEMENT */}
        <div className="flexStart md:w-[222px] md:mt-[7px] lg:w-[290px]">
          <input
            type="checkbox"
            id="agreement"
            {...register("agreement")}
            className="absolute opacity-0 w-0 h-0"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <label
            htmlFor="agreement"
            className="flex items-start gap-2 cursor-pointer focus:outline-none focus:ring-[1px] focus:ring-offset-2 focus:ring-blue-500"
          >
            <Image
              src={isChecked ? "/checked.svg" : "/unchecked.svg"}
              alt={isChecked ? "checked-icon" : "unchecked-icon"}
              width={isTablet ? 22 : 24}
              height={isTablet ? 22 : 24}
            />
            <span className="extraLight-12-22-0">{CAREER.form.agreement}</span>
          </label>
        </div>

        <button
          type="submit"
          className="medium-30-auto-0 lg:medium-32-auto-0 uppercase inline-block self-end md:self-start focus:outline-none focus:ring-[1px] focus:ring-offset-2 focus:ring-white/50"
          disabled={!isChecked}
        >
          {CAREER.form.button}
        </button>
      </div>
    </form>
  );
};

export default CareerForm;
