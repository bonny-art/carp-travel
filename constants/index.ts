import { title } from "process";

// NAVIGATION
export const NAV = {
  links: [
    { key: "about", label: "About" },
    { key: "services", label: "Services" },
    { key: "career", label: "Career" },
    { key: "gallery ", label: "Gallery" },
    { key: "contacts", label: "Contacts" },
  ],
  button: {
    menu: "Menu",
    close: "Close",
  },
};

// HERO
export const HERO = {
  subtitle: {
    accent: "7",
    big: "days",
    small: "journey",
  },
  title: {
    accent: "Uncover ",
    text: "Carpathian’s Secrets",
  },
  places:
    "Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel",
  description:
    "We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
  button: {
    label: "join now",
    iconSize: {
      sm: {
        width: 42,
        height: 53,
      },
      md: {
        width: 35,
        height: 50,
      },
      lg: {
        width: 44,
        height: 71,
      },
    },
  },
};

// ABOUT
export const ABOUT = {
  title: {
    accent: "we are",
    text: "Who ",
  },
  description: {
    firstAccent: "a team of enthusiasts ",
    firstText:
      "who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.",
    secondAccent: "We believe ",
    secondText:
      "that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.",
    thirdAccent: "We use methods ",
    thirdText:
      "that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains.",
  },
  slogan: {
    first: "From vacationers ",
    second: "to active travelers",
    third: "we have a tour for everyone.",
  },
};

// SERVICES

export const SERVICES = {
  title: {
    accent: "offer",
    text: "We ",
  },
  slides: {
    list: [
      "ATVs Traveling",
      "Rock climbing",
      "Hot air ballooning",
      "Skydiving",
      "Rafting",
    ],
    content: [
      {
        title: "ATVs Traveling",
        image: {
          xs: "bg-services-01-xs",
          md: "bg-services-01-md",
          lg: "bg-services-01-lg",
        },
        slogan: "Feel the adrenaline rush",
        description:
          "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
      },
      {
        title: "Rock climbing",
        image: {
          xs: "bg-services-02-xs",
          md: "bg-services-02-md",
          lg: "bg-services-02-lg",
        },
        slogan: "Destroy your limitations",
        description:
          "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
      },
      {
        title: "Hot air ballooning",
        image: {
          xs: "bg-services-03-xs",
          md: "bg-services-03-md",
          lg: "bg-services-03-lg",
        },
        slogan: "Get Inspired",
        description:
          "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
      },
      {
        title: "Skydiving",
        image: {
          xs: "bg-services-04-xs",
          md: "bg-services-04-md",
          lg: "bg-services-04-lg",
        },
        slogan: "Overcome your fears",
        description:
          "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
      },
      {
        title: "Rafting",
        image: {
          xs: "bg-services-05-xs",
          md: "bg-services-05-md",
          lg: "bg-services-05-lg",
        },
        slogan: "Trust the flow",
        description:
          "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
      },
    ],
  },
};

// CAREER
export const CAREER = {
  title: {
    accent: "us",
    text: "Choose ",
  },
  description:
    "Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.",
  subtitle: "Why us ?",
  list: [
    {
      title: "Professional development",
      description:
        "We offer growth opportunities and a creative environment to nurture your talents.",
    },
    {
      title: "Teamwork",
      description:
        "Join our close-knit family, where support and inspiration abound.",
    },
    {
      title: "Stimulating work environment",
      description:
        "Flexibility and remote options for a comfortable experience.",
    },
    {
      title: "Exciting challenges",
      description:
        "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
    },
  ],
  slogan: {
    first: "Don't miss your opportunity!",

    second: "Fill out the form right now and join our team!",
  },
  form: {
    name: {
      label: "Full name",
      placeholder: "John Smith",
    },
    email: {
      label: "E-mail",
      placeholder: "johnsmith@email.com",
    },
    position: {
      label: "Position",
      placeholder: "Movie maker",
    },
    phone: {
      label: "Phone",
      placeholder: {
        code: "+ 38",
        number: "(097) 12 34 567",
      },
    },
    message: {
      label: "Message",
      placeholder: "",
    },
    agreement: "I confirm my consent to the processing of personal data.",
    button: "Send",
  },
};
