import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxGrid,
  RxEnvelopeClosed,
} from "react-icons/rx";
import {
  HiHome,
  HiFolder,
  HiLightningBolt,
  HiOutlineCake,
  HiDocumentText,
  HiPhone,
} from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const SOCIALS = [
  // {
  //   name: "Instagram",
  //   icon: RxInstagramLogo,
  //   link: "https://instagram.com/biren_1111",
  // },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/biren-gohel-14b3012b6/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/gohel-biren1111/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 15",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Chakra UI",
    image: "chakraui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SEO",
    image: "seo.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Soirée Season — Curated Elegance for Every Occasion",
    description:
      "Discover Soirée Season is a e-commerce website refined fashion and lifestyle destination celebrating timeless style, thoughtful gifting, and modern sophistication. From handcrafted jewelry to curated home accents, every piece tells a story of elegance and creativity — designed to make every celebration uniquely yours.",
    image: "/projects/project-1.png",
    link: "https://soireeseason.com/",
  },
  {
    title: "Voise.ai — Your Voice, Perfected by AI",
    description:
      "Voise.ai transforms text into emotive, studio-quality speech with ease. Choose from a range of AI voices, fine-tune tone & style, and download lifelike audio for podcasts, videos, narration, or conversational agents.",
    image: "/projects/project-2.png",
    link: "https://voise.ai/",
  },
  {
    title: "VoiceGen AI — Turn Scripts into Real Voices",
    description:
      "With VoiceGen AI by GenXi, convert your scripts into expressive, studio-quality audio using over 100 AI voices. Ideal for podcasts, videos, narration, and immersive storytelling.",
    image: "/projects/project-3.png",
    link: "https://genxi.io/voicegenai/",
  },
  {
    title: "Epen SupportChat — All-in-One Smart Chatbot",
    description:
      "Epen SupportChat lets you send text, images, audio, video, PDFs, Word, Excel, and more. Reply, react with emojis, track history with date redirect picker, and enjoy a seamless interactive chat experience.",
    image: "/projects/project-7.png",
    link: "https://epen.dev/supportchat",
  },

  {
    title: "Elevate Your Game with Gulf Laser Tag",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-4.png",
    link: "https://www.gulflasertag.net/",
  },
  {
    title: "Boost Your Online Presence with 10Turtle SEO",
    description:
      "Discover the power of modern SEO with 10Turtle. This website showcases innovative strategies, tools, and techniques to enhance search visibility, drive traffic, and grow your digital presence effectively.",
    image: "/projects/project-5.png",
    link: "https://seo.10turtle.com/",
  },
  {
    title: "AskGPT Conversational AI Platform",
    description:
      "AskGPT is a versatile conversational AI platform for text-based interaction and creative content generation and image generation. It offers multi-model support for creativity, productivity,and learning , and tools for brainstorming, writing, and productivity workflows.",
    image: "/projects/project-6.png",
    link: "https://genxi.io/askgpt",
  },
] as const;

export const PACKAGES = [
  {
    title: "vue-pro-toast",
    description:
      "A lightweight and elegant Vue toast notification library for real-time alerts with smooth animations and customization.",
    link: "https://www.npmjs.com/package/vue-pro-toast",
  },
  {
    title: "Pro React Toast",
    description:
      "A professional React toast notification library with TypeScript support, multiple themes, position control, and smooth animations.",
    link: "https://www.npmjs.com/package/pro-react-toast",
  },
  {
    title: "react-offline-sync-hook",
    description:
      "A React hook that enables offline data synchronization and seamless updates when the network is restored.",
    link: "https://www.npmjs.com/package/react-offline-sync-hook",
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/gohel-biren1111/",
      },
      {
        name: "Bento",
        icon: RxGrid,
        link: "https://bento.me/biren-gohel",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/biren-gohel-14b3012b6/",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/biren_1111",
      },
    ],
  },
  {
    title: "About Me",
    data: [
      // {
      //   name: "Learning about me",
      //   icon: null,
      //   link: "https://github.com/gohel-biren1111/",
      // },
      {
        name: "Contact Us",
        icon: RxEnvelopeClosed,
        link: "mailto:birengohel01111@gmail.com",
      },
      {
        name: "Location",
        icon: HiOutlineLocationMarker,
        link: "https://maps.app.goo.gl/EyN59KXm3a3WNtwr8",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Package",
    link: "#package",
  },
  {
    title: "Resume",
    link: "#resume",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;
export const FOOTER_NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
    icon: HiHome,
  },
  {
    title: "Projects",
    link: "#projects",
    icon: HiFolder,
  },
  {
    title: "Skills",
    link: "#skills",
    icon: HiLightningBolt,
  },
  {
    title: "Package",
    link: "#package",
    icon: HiOutlineCake,
  },
  {
    title: "Resume",
    link: "#resume",
    icon: HiDocumentText,
  },
  {
    title: "Contact",
    link: "#contact",
    icon: HiPhone,
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/gohel-biren1111/",
};

export const RESUME_DATA = {
  title: "Download / See Resume",
  description:
    "Get a comprehensive overview of my skills, experience and projects.",
  downloadUrl: "/Biren_Gohel_Resume.pdf",
  sections: [
    "Professional Experience",
    "Technical Skills",
    "Notable/Key Projects",
    "Education Background",
    "Contact Information",
  ],
} as const;
