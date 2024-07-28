import { useState, useEffect, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Image from "next/image";
import content from "@/public/data/content.json";
import useResponsive from "@/hooks/useResponsive";
import { careerFormSchema } from "@/validation/careerFormSchema";
import { formatPhoneNumber } from "@/helpers/formatPhone";

type CareerFormValues = {
  name: string;
  email: string;
  position: string;
  phone: string;
  message?: string;
  agreement?: boolean;
};

const CareerForm = () => {
  const { isTablet } = useResponsive();
  const [isChecked, setIsChecked] = useState(false);
  const [formattedPhone, setFormattedPhone] = useState("");

  const [defaultValues, setDefaultValues] = useState<CareerFormValues>({
    name: "",
    email: "",
    position: "",
    phone: "",
    message: "",
    agreement: false,
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("careerFormData");
    if (savedFormData) {
      const formData = JSON.parse(savedFormData);
      setDefaultValues({ ...formData, agreement: false });
      setFormattedPhone(formatPhoneNumber(formData.phone));
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
    trigger,
    reset,
  } = useForm<CareerFormValues>({
    defaultValues,
    resolver: yupResolver(careerFormSchema),
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const positionValue = watch("position");
  const phoneValue = watch("phone");
  const messageValue = watch("message");

  const saveFormData = useCallback(() => {
    const formData = {
      name: nameValue,
      email: emailValue,
      position: positionValue,
      phone: phoneValue,
      message: messageValue,
    };
    localStorage.setItem("careerFormData", JSON.stringify(formData));
  }, [nameValue, emailValue, positionValue, phoneValue, messageValue]);

  const onSubmit: SubmitHandler<CareerFormValues> = (data) => {
    console.log(data);
    localStorage.removeItem("careerFormData");
    reset();
    setFormattedPhone("");
  };

  const toggleCheckbox = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setValue("agreement", newCheckedState, { shouldValidate: true });
    trigger("agreement");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const cleanedInput = input.replace(/\D/g, "").slice(0, 10);
    setFormattedPhone(formatPhoneNumber(cleanedInput));
    setValue("phone", cleanedInput);
    saveFormData();
  };

  const handlePhoneBlur = () => {
    trigger("phone");
  };

  useEffect(() => {
    saveFormData();
  }, [nameValue, emailValue, positionValue, messageValue, saveFormData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flexStart flex-col gap-4 md:gap-[9px]"
    >
      <div className="flexStart flex-col gap-4 md:flex-row md:gap-5">
        <div className="flexStart flex-col gap-4 lg:gap-6 md:w-[222px] lg:w-[290px]">
          {/* NAME */}
          <div className="flexStart flex-col gap-1 relative">
            <label
              htmlFor="name"
              className={`extraLight-12-24-20 ${
                errors.name ? "text-orange-50" : ""
              }`}
            >
              {content.CAREER.form.name.label}
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              placeholder="John Smith"
              {...register("name")}
              onBlur={() => trigger("name")}
              className={`block w-full lg:h-7 px-2 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } ${
                nameValue ? "bg-white/10" : "bg-white/5"
              }  placeholder:text-white/20`}
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
              htmlFor="email"
              className={`extraLight-12-24-20 ${
                errors.email ? "text-orange-50" : ""
              }`}
            >
              {content.CAREER.form.email.label}
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="johnsmith@email.com"
              {...register("email")}
              onBlur={() => trigger("email")}
              className={`block w-full lg:h-7 px-2 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.email ? "text-orange-50" : ""
              } ${
                emailValue ? "bg-white/10" : "bg-white/5"
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
              htmlFor="position"
              className={`extraLight-12-24-20 ${
                errors.position ? "text-orange-50" : ""
              }`}
            >
              {content.CAREER.form.position.label}
            </label>
            <input
              type="text"
              id="position"
              placeholder={content.CAREER.form.position.placeholder}
              {...register("position")}
              onBlur={() => trigger("position")}
              className={`block w-full lg:h-7 px-2 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } ${
                positionValue ? "bg-white/10" : "bg-white/5"
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
              htmlFor="phone"
              className={`extraLight-12-24-20 ${
                errors.phone ? "text-orange-50" : ""
              }`}
            >
              {content.CAREER.form.phone.label}
            </label>
            <span className="extraLight-13-24-0 lg:extraLight-20-24-0 absolute bottom-0 lg:bottom-0.5 left-2">
              {content.CAREER.form.phone.placeholder.code}
            </span>
            <input
              type="text"
              id="phone"
              autoComplete="phone"
              placeholder={content.CAREER.form.phone.placeholder.number}
              value={formattedPhone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              className={`block w-full lg:h-7 pr-2 pl-10 lg:pl-[57px] extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.phone ? "text-orange-50" : ""
              } ${
                phoneValue ? "bg-white/10" : "bg-white/5"
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
          <label htmlFor="message" className="extraLight-12-24-20">
            Message
          </label>
          <textarea
            id="message"
            placeholder=""
            {...register("message")}
            onBlur={() => trigger("message")}
            className={`block w-full h-[196px] md:h-[228px] lg:h-[268px] px-2 extraLight-13-24-0 lg:extraLight-20-24-0 resize-none focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
              messageValue ? "bg-white/10" : "bg-white/5"
            }`}
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
            className="flex items-start gap-2 cursor-pointer focus:outline-none focus:ring-[1px] focus:ring-white/50 select-none"
          >
            <Image
              src={isChecked ? "/checked.svg" : "/unchecked.svg"}
              alt={isChecked ? "checked-icon" : "unchecked-icon"}
              width={isTablet ? 22 : 24}
              height={isTablet ? 22 : 24}
            />
            <span className="extraLight-12-22-0">
              {content.CAREER.form.agreement}
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="medium-30-auto-0 lg:medium-32-auto-0 uppercase inline-block self-end md:self-start focus:outline-none group relative"
        >
          {content.CAREER.form.button}
          <span
            className={`absolute bottom-0 left-0 w-full h-[1px] bg-white
                transform scale-x-0 ${
                  isValid && "group-hover:scale-x-100"
                } group-focus:scale-x-100 transition-transform duration-300`}
          />
        </button>
      </div>
    </form>
  );
};

export default CareerForm;
