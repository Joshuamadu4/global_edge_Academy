export interface Social {
  id: string
  title: string
  icon: string
  url: string
}

export interface FeatureButton {
  icon: string
  title: string
}

export interface Feature {
  id: string
  icon: string
  caption: string
  title: string
  text: string
  button: FeatureButton
}


export const socials: Social[] = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
]

export const features: Feature[] = [
  {
    id: '0',
    icon: '/images/feature-1.png',
    caption: 'Seamless Onboarding',
    title: 'Learn Smarter, Grow Faster',
    text: 'At Global Edge Academy, students experience a smooth transition into our system with personalized learning paths and supportive mentorship—making every moment of study count.',
    button: {
      icon: '/images/zap.svg',
      title: 'Explore Our Approach',
    },
  },
  {
    id: '1',
    icon: '/images/feature-2.png',
    caption: 'Safe & Supportive Environment',
    title: 'We’re With You Every Step',
    text: 'From the first day of class to graduation, we create a nurturing environment where students feel safe, confident, and empowered to reach their full potential.',
    button: {
      icon: '/images/zap.svg',
      title: 'Discover Student Life',
    },
  },
]


export interface Details {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: {
    icon: string;
    title: string;
  };
}
export const details: Details[] =[
    {
    id: "0",
    icon: "/images/students/expert-tutors.svg",
    caption: "Qualified Instructors",
    title: "Expert Tutors",
    text: "Learn from experienced professionals passionate about teaching and real-world applications.",
    button: {
      icon: "/images/students/group.svg",
      title: "Meet Our Team",
    },
  },
  {
    id: "1",
    icon: "/images/students/handon.svg",
    caption: "Practical Learning",
    title: "Hands-On Experience",
    text: "Gain real-world coding, design, and project skills through practical sessions and mentorship.",
    button: {
      icon: "/images/triangle.svg",
      title: "Our Approach",
    },
  },
  {
    id: "2",
    icon: "/images/students/tech.svg",
    caption: "Modern Tools",
    title: "AI-Driven Learning",
    text: "We integrate AI tools, modern labs, and project-based curricula to empower student creativity.",
    button: {
      icon: "/images/students/ai.svg",
      title: "Technology Focus",
    },
  },

];


export interface Testimonials{
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    comment: string;
}
export const testimonials: Testimonials[] = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/alicia-barker.png",
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Floclips",
    avatarUrl: "/images/testimonials/becky-snider.png",
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/jim-bradley.png",
    comment:
      "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
  },
];


export interface Plans{
    id: string; 
    title: string;
    priceMonthly: string;
    priceYearly: string;
    caption: string;
    features: string;
    icon: string;
    logo: string; 

}
export const plans = [
  {
    id: "0",
    title: "Online",
    priceMonthly: 50000,
    priceYearly: null,
    caption: "12 × 1hr sessions via Zoom/Meet",
    features: [
      "Lesson feedback",
      "Tutor reports",
      "Flexible rescheduling",
      "Vetted subject experts",
    ],
    icon: "/images/online.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Physical",
    priceMonthly: 100000,
    priceYearly: null,
    caption: "12 × 1hr sessions at your home",
    features: [
      "Lesson feedback",
      "Tutor reports",
      "Flexible rescheduling",
      "In-person teaching",
    ],
    icon: "/images/physical.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Hybrid",
    priceMonthly: 75000,
    priceYearly: null,
    caption: "6 online + 6 physical sessions",
    features: [
      "Lesson feedback",
      "Tutor reports",
      "Flexible rescheduling",
      "Best of both modes",
    ],
    icon: "/images/hybrid.svg",
    logo: "/images/plan-3.png",
  },
  {
    id: "3",
    title: "Custom Plan",
    priceMonthly: null,
    priceYearly: null,
    caption: "Tailored to your child’s unique needs",
    features: [
      "Customized schedule & content",
      "Lesson feedback",
      "Tutor reports",
      "Flexible rescheduling",
    ],
    icon: "/images/custom.svg",
    logo: "/images/plan-custom.png",
  },
]
