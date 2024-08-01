"use client";

import content from "@/public/data/content.json";
import ContactsForm from "./ContactsForm";
import Link from "next/link";
import { formatPhoneNumberWithCode } from "@/helpers/formatPhone";
import { useEffect, useState } from "react";

export type ContactsFormValues = {
  name: string;
  email: string;
  message: string;
};

const Contacts = () => {
  const [defaultValues, setDefaultValues] = useState<ContactsFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedFormData = localStorage.getItem("contactsFormData");
    if (savedFormData) {
      const formData = JSON.parse(savedFormData);
      setDefaultValues({ ...formData, agreement: false });
    }

    setIsLoaded(true);
  }, []);

  return (
    <section
      id="contacts"
      className="py-14 md:py-16 lg:py-20 bg-contacts-xs md:bg-contacts-md lg:bg-contacts-lg"
    >
      <div className="container overflow-hidden lg:py-6 flexStart flex-col gap-9 lg:gap-[71px]">
        <h2 className="thin-40-56--4 md:thin-67-66--4 lg:thin-98-auto--4 lg:ml-6 uppercase">
          {content.contacts.title.text}
          <span className="font-medium">{content.contacts.title.accent}</span>
        </h2>

        <div className="flexStart flex-col lg:flex-row gap-3 md:gap-16 lg:flexBetween">
          <div className="flexStart flex-col md:flex-row lg:flex-col gap-6 md:gap-[90px] lg:gap-[121px] lg:w-[394px]">
            <div className="flexStart flex-col gap-6 lg:gap-16 items-start">
              <div className="flexStart gap-5">
                <ul className="w-[179px] md:w-[221px] lg:w-[293px]">
                  {content.contacts.phone.data.map((item, index) => (
                    <li key={index} className="text-end">
                      <Link
                        href={`tel:${item}`}
                        className="regular-14-24-0 md:regular-16-24-0 lg:regular-18-24-0 group relative"
                      >
                        {formatPhoneNumberWithCode(item)}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="extraLight-12-20-0 lg:extralight-12-24-0 mt-1">
                  {content.contacts.phone.label}
                </p>
              </div>

              <div className="flexStart gap-5">
                <ul className="w-[179px] md:w-[221px] lg:w-[293px]">
                  {content.contacts.email.data.map((item, index) => (
                    <li key={index} className="text-end">
                      <Link
                        href={`mailto:${item}`}
                        className="regular-14-24-0 md:regular-16-24-0 lg:regular-18-24-0 group relative"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="extraLight-12-20-0 lg:extralight-12-24-0 mt-1">
                  {content.contacts.email.label}
                </p>
              </div>
            </div>

            <div className="flexStart gap-5 lg:flex-row-reverse self-start">
              <p className="extraLight-12-20-0 lg:extralight-12-24-0 w-[179px] md:w-[52px] text-end lg:text-start mt-1">
                {content.contacts.socials.label}
              </p>
              <ul className="lg:w-[293px]">
                {content.contacts.socials.data.map((item, index) => (
                  <li key={index} className="lg:text-end">
                    <Link
                      href={item.link}
                      className="regular-14-24-0 md:regular-16-24-0 lg:regular-18-24-0 group relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.network}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isLoaded && <ContactsForm defaultValues={defaultValues} />}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
