import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Image from "next/image";
import { CONTACTS } from "@/constants";
import useResponsive from "@/hooks/useResponsive";

type ContactsFormValues = {
  name: string;
  email: string;
  message: string;
};

const contactsFormSchema = yup.object().shape({
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

const ContactsForm: React.FC = () => {
  const { isTablet } = useResponsive();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<ContactsFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(contactsFormSchema),
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const messageValue = watch("message");

  const onSubmit: SubmitHandler<ContactsFormValues> = (
    data: ContactsFormValues
  ) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flexStart flex-col gap-4 lg:gap-6"
    >
      <div className="flexStart flex-col gap-6 md:flex-row md:gap-5 lg:flex-col lg:gap-[68px]">
        <div className="flexStart flex-col gap-6 md:gap-[28px] lg:flex-row md:w-[221px] lg:w-full lg:gap-5">
          {/* NAME */}
          <div className="flexStart flex-col gap-1 relative lg:w-[293px]">
            <label
              htmlFor="name"
              className={`extraLight-12-24-20 ${
                errors.name ? "text-orange-50" : ""
              }`}
            >
              {CONTACTS.form.name.label}
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              placeholder={CONTACTS.form.name.placeholder}
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
          <div className="flexStart flex-col gap-1 relative lg:w-[294px]">
            <label
              htmlFor="email"
              className={`extraLight-12-24-20 ${
                errors.email ? "text-orange-50" : ""
              }`}
            >
              {CONTACTS.form.email.label}
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="johnsmith@email.com"
              {...register("email")}
              onBlur={() => trigger("email")}
              className={`block w-full lg:h-7 px-2 extraLight-13-24-0 lg:extraLight-20-24-0 focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
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
        </div>

        {/* MESSAGE */}
        <div className="flexStart flex-col gap-1 md:w-[463px] lg:w-[607px] relative">
          <label
            htmlFor="message"
            className={`extraLight-12-24-20 ${
              errors.message ? "text-orange-50" : ""
            }`}
          >
            {CONTACTS.form.message.label}
          </label>
          <textarea
            id="message"
            placeholder=""
            {...register("message")}
            onBlur={() => trigger("message")}
            className={`block w-full h-[196px] md:h-[228px] lg:h-[268px] px-2 extraLight-13-24-0 lg:extraLight-20-24-0 resize-none focus:outline-none focus:ring-[1px] focus:ring-white/50 ${
              errors.message ? "text-orange-50" : ""
            } ${messageValue ? "bg-white/10" : "bg-white/5"}`}
          />
          {errors.message && (
            <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
              <Image
                src={"/incorrect.svg"}
                alt={"incorrect-icon"}
                width={18}
                height={18}
              />
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="medium-30-auto-0 lg:medium-32-auto-0 uppercase inline-block self-end focus:outline-none group relative"
      >
        {CONTACTS.form.button}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white       transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300" />
      </button>
    </form>
  );
};

export default ContactsForm;
