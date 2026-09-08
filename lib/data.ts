// Centralized, typed content for the site. All copy is sourced from
// Becky Anjola Lasore's resume — no placeholder Lorem Ipsum.

export interface EssencePill {
  label: string;
}

export const essencePills: EssencePill[] = [
  { label: "Strategy" },
  { label: "Excellence" },
  { label: "Leadership" },
  { label: "Growth" },
];

export interface TraitItem {
  label: string;
}

export const traitList: TraitItem[] = [
  { label: "Financial Modelling & Reporting" },
  { label: "Stakeholder Management" },
  { label: "Digital Banking Operations" },
  { label: "Brand & Marketing Management" },
];

export interface FocusArea {
  number: string;
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    number: "01",
    title: "Digital Banking",
    description:
      "Experience across digital banking, trade services, and treasury operations in Nigerian financial institutions.",
  },
  {
    number: "02",
    title: "Business Building",
    description:
      "Founded and leads Theokallia — overseeing operations, brand, and growth from idea to active business.",
  },
  {
    number: "03",
    title: "Brand & Content",
    description:
      "Builds brand presence and documents the journey on YouTube and Instagram for a growing audience.",
  },
  {
    number: "04",
    title: "Leadership",
    description:
      "Leads campus and ministry teams, mentors younger students, and speaks at events with clarity and purpose.",
  },
];

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  logo?: string;
  bullets: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    period: "2024 – Present",
    role: "Founder, Chief Executive Officer",
    org: "Theokallia",
    logo: "/images/theokallia-logo.png",
    bullets: [
      "Founded and scaled a product-based business, overseeing end-to-end operations including strategic planning, marketing, customer relations, and product management from inception to active operations.",
      "Designed and executed multi-channel sales campaigns and branding initiatives that drove measurable growth in customer engagement and product visibility.",
      "Streamlined inventory management and operational workflows, improving stock accuracy and enabling consistent fulfilment across customer orders.",
      "Developed and implemented digital marketing strategies that increased brand visibility and contributed to consistent revenue growth quarter-on-quarter.",
    ],
  },
  {
    period: "2025",
    role: "Brand Manager",
    org: "Ferina's Journals",
    logo: "/images/ferinas-journals-logo.png",
    bullets: [
      "Repositioned brand identity and communications strategy, resulting in a more cohesive and professional market presence across digital channels.",
      "Created and executed targeted promotional strategies that boosted brand awareness and grew a loyal customer base across key platforms.",
      "Spearheaded content creation and digital publicity campaigns, maintaining consistent brand voice and increasing audience engagement.",
    ],
  },
  {
    period: "2025",
    role: "Intern — Digital Banking & Trade Services",
    org: "Globus Bank Ltd",
    logo: "/images/globus-bank-logo.png",
    bullets: [
      "Gained hands-on experience in digital banking operations and fintech processes, contributing to the efficient delivery of customer-facing financial services.",
      "Supported trade transaction processing and documentation within the Trade Services Department, ensuring accuracy and compliance with banking procedures.",
      "Collaborated cross-functionally to uphold service standards, contributing to consistent operational efficiency.",
    ],
  },
  {
    period: "2026",
    role: "Treasury Department Intern",
    org: "Covenant Microfinance Bank",
    logo: "/images/covenant-mfb-logo.png",
    bullets: [
      "Contributed to daily treasury operations and liquidity management, supporting the bank's financial stability and cash flow monitoring processes.",
      "Prepared treasury reports and maintained financial documentation, ensuring accuracy and compliance with internal reporting standards.",
    ],
  },
];

export interface LeadershipItem {
  period: string;
  role: string;
  org: string;
  bullets?: string[];
  note?: string;
}

export const leadershipItems: LeadershipItem[] = [
  {
    period: "2026 – Present",
    role: "General Secretary",
    org: "Kerygma Global Ministries",
    bullets: [
      "Coordinated official correspondence with sponsors, partners, guest ministers, and stakeholders.",
      "Drafted and managed formal communications for Healing and Worship Meetings (HAWM).",
      "Contributed to the successful execution of HAWM Abuja and HAWM Enugu.",
    ],
  },
  {
    period: "2025 – 2026",
    role: "Academic Director",
    org: "Finance Students Association (FINSA)",
    bullets: [
      "Led academic initiatives designed to improve student engagement and performance.",
      "Coordinated seminars, tutorials, and educational support programs.",
    ],
  },
  {
    period: "2025 – 2026",
    role: "Assistant Head & Financial Secretary",
    org: "Communion Unit",
    bullets: [
      "Assisted in planning and coordinating unit activities; supported leadership and team management.",
      "Managed financial records, accountability processes, budgeting, financial planning, and reporting.",
    ],
  },
  {
    period: "2024",
    role: "Head of Resources",
    org: "Project 5.0, Covenant University",
    bullets: [
      "Managed resource allocation and logistics coordination.",
      "Ensured availability of materials and support required for project execution.",
    ],
  },
  {
    period: "2025",
    role: "Social Media Lead",
    org: "College Week",
    note: "Details for this role were cut off in the resume screenshot — send the full bullets and they can be added here.",
  },
];

export const technicalSkills: string[] = [
  "Microsoft Office Suite",
  "Data Analysis",
  "AI Prompt Engineering",
  "Financial Modelling & Reporting",
  "Business Analysis",
  "Financial Inclusion & Digital Payments",
  "Digital Banking Operations",
];

export const coreCompetencies: string[] = [
  "Leadership & Team Coordination",
  "Strategic Planning",
  "Stakeholder Management",
  "Financial Administration",
  "Brand & Marketing Management",
  "Event Planning & Execution",
  "Communication & Presentation",
];

export interface EduCard {
  period: string;
  title: string;
  detail: string;
}

export const educationCards: EduCard[] = [
  {
    period: "2022 – 2026 (Expected)",
    title: "B.Sc. Financial Technology",
    detail:
      "Covenant University, Ota · Fintech, Banking Operations, Digital Finance, Corporate Finance, Data Analytics",
  },
  {
    period: "2026",
    title: "AATWA – ICAN",
    detail: "Association of Accounting Technicians certification",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const contactInfo = {
  email: "lasorebecky@gmail.com",
  phone: "+234 703 622 2570",
  phoneHref: "+2347036222570",
  location: "Lagos, Nigeria",
  instagram: "https://www.instagram.com/anjybecca/",
  youtube: "https://youtu.be/EBVsgGz8nUo",
};

export const socialLinks = [
  { label: "Instagram", href: contactInfo.instagram },
  { label: "YouTube", href: contactInfo.youtube },
];
