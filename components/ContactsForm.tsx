import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Image from "next/image";
import content from "@/public/data/content.json";
import { useCallback, useEffect, useState } from "react";
import { contactsFormSchema } from "@/validation/contactsFormSchema";
import { ContactsFormValues } from "./Contacts";
import { Notify } from "notiflix";
import { notiflixConfig } from "@/config/notiflixConfig";

type ContactsFormProps = {
  defaultValues: ContactsFormValues;
};

const ContactsForm = ({ defaultValues }: ContactsFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
    reset,
  } = useForm<ContactsFormValues>({
    defaultValues,
    resolver: yupResolver(contactsFormSchema),
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const messageValue = watch("message");

  const saveFormData = useCallback(() => {
    const formData = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };
    localStorage.setItem("contactsFormData", JSON.stringify(formData));
  }, [nameValue, emailValue, messageValue]);

  const onSubmit: SubmitHandler<ContactsFormValues> = (
    data: ContactsFormValues
  ) => {
    console.log(data);
    localStorage.removeItem("contactsFormData");
    reset({
      name: "",
      email: "",
      message: "",
    });
    Notify.info("Your application was send successfully!", {
      ...notiflixConfig,
      cssAnimationStyle: "fade",
    });
  };

  useEffect(() => {
    saveFormData();
  }, [nameValue, emailValue, messageValue, saveFormData]);

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
              {content.contacts.form.name.label}
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              placeholder={content.contacts.form.name.placeholder}
              {...register("name")}
              onBlur={() => trigger("name")}
              className={`block w-full lg:h-7 px-2 extraLight-13-24-0 lg:extraLight-20-24-0 focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } ${
                nameValue ? "bg-white/10" : "bg-white/5"
              }  placeholder:text-white/20`}
            />
            {errors.name && (
              <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
                <span>
                  <Image
                    src={"/incorrect.svg"}
                    alt={"incorrect-icon"}
                    width={18}
                    height={18}
                    className="inline-block"
                  />
                </span>
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
              {content.contacts.form.email.label}
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="johnsmith@email.com"
              {...register("email")}
              onBlur={() => trigger("email")}
              className={`block w-full lg:h-7 px-2 extraLight-13-24-0 lg:extraLight-20-24-0 focus:ring-[1px] focus:ring-white/50 ${
                errors.name ? "text-orange-50" : ""
              } ${
                emailValue ? "bg-white/10" : "bg-white/5"
              } placeholder:text-white/20`}
            />
            {errors.email && (
              <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
                <span>
                  <Image
                    src={"/incorrect.svg"}
                    alt={"incorrect-icon"}
                    width={18}
                    height={18}
                    className="inline-block"
                  />
                </span>
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
            {content.contacts.form.message.label}
          </label>
          <textarea
            id="message"
            placeholder=""
            {...register("message")}
            onBlur={() => trigger("message")}
            className={`block w-full h-[196px] md:h-[228px] lg:h-[268px] px-2 extraLight-13-24-0 lg:extraLight-20-24-0 resize-none focus:ring-[1px] focus:ring-white/50 ${
              errors.message ? "text-orange-50" : ""
            } ${messageValue ? "bg-white/10" : "bg-white/5"}`}
          />
          {errors.message && (
            <span className="extraLight-12-24-20 text-orange-50 inline-flex gap-1 absolute -bottom-[22px] right-0">
              <span>
                <Image
                  src={"/incorrect.svg"}
                  alt={"incorrect-icon"}
                  width={18}
                  height={18}
                  className="inline-block"
                />
              </span>
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`medium-30-auto-0 lg:medium-32-auto-0 uppercase inline-block self-end group relative ${
          !isValid && "text-white/50"
        }`}
      >
        {content.contacts.form.button}
        <span
          className={`absolute bottom-0 left-0 w-full h-[1px] bg-white
                transform scale-x-0 ${
                  isValid && "group-hover:scale-x-100"
                }  group-focus:scale-x-100 transition-transform duration-300`}
        />
      </button>
    </form>
  );
};

export default ContactsForm;
