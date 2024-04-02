import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Try Now",
    url: "https://quantum-image.vercel.app/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Fund me",
    url: "https://milaap.org/fundraisers/support-zaid-28?deeplink_type=paytm",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Image Restore",
  "Generative fill",
  "Object Remover",
  "Object Recolor",
  "Background Remover",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the AI to understand and create media as per voice commands, making it easier for users to interact and innovate.",
    date: "Feb 2024",
    status: "doing",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Professional proflile",
    text: "Turn normal pic to professional, such as a normal daily person pic to a resume ready picture with formals and necessary environment.",
    date: "Dec 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "Nov 2023",
    status: "don",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the Application to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart innovation and top-notch security, it's the perfect solution for teams looking to work innovately and reliabily.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Innovation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Free",
    price: "0",
    features: [
      "10 Free Credits",
      "Basic Access to Services",
      "No Priority Customer Support",
      "No Priority Updates",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI features, priority support",
    price: "19",
    features: [
      "120 Credits",
      "Basic Access to Services",
      "Priority Customer Support",
      "No Priority Updates",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI Integrations, advanced analytics, dedicated account",
    price: 169,
    features: [
      "2000 Free Credits",
      "Advanced Access to Services",
      "24/7 Priority Customer Support",
      "Fulll Priority Updates",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Image Restore",
    text: "Restore old images or memories quickly like they were never old, Upload image and see magic. Update old memories by uploading old memories",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Generative Fill",
    text: "Convert landscape image to mobile portrait and vice versa using AI in seconds. Never regret of awful dimensions again, Convert them to your desired (Give it a try, its magic)",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Object Remover",
    text: "Time is over where you mess your head because of some UNWANTED GUESTS in picture. Worry not, Upload the image, write object name and our AI will remove it as it never existed. Give it a try",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Object Recolor",
    text: "Change color of any object, weather its your shirt or car. Write object and color you want and our AI will caste spell and do magic",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Background Remover",
    text: "Use AI in removing background remover, We bet its not any ordinary BG remover. Give it a try to figure out",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "FREE",
    text: "The best thing, Use all this Next Gen Features for free of cost, Sign up now to avail some wild benefits",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
