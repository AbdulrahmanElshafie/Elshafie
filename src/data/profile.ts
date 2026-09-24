export interface ProfileData {
  name: string;
  firstName: string;
  headline: string;
  title: string;
  positioningStatement: string;
  extendedBio: string;
  email: string;
  phone: string;
  location: string;
  country: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  resumePlaceholder: string;
  education: {
    institution: string;
    faculty: string;
    degree: string;
    period: string;
    field: string;
  };
  certifications: Array<{
    name: string;
    issuer: string;
    topics?: string[];
  }>;
}

export const profile: ProfileData = {
  name: "Abdulrahman Saeed Elshafie",
  firstName: "Abdulrahman",
  headline: "Backend & AI Engineer",
  title: "Backend & AI Engineer",
  positioningStatement: "I build backend systems, AI workflows, and automation around real user and business problems.",
  extendedBio: "Backend & AI Engineer with a background in digital marketing, SEO, and user acquisition. I turn operational friction and user needs into production-ready APIs, structured LLM pipelines, and automated execution workflows—connecting business goals directly to technical architecture.",
  email: "abdulrahman.saeed.elshafie@gmail.com",
  phone: "+20 101 862 5142",
  location: "6 October City, Giza",
  country: "Egypt",
  linkedin: "https://www.linkedin.com/in/abdulrahman-elshafie/",
  github: "https://github.com/AbdulrahmanElshafie",
  portfolioUrl: "https://abdulrahman-saeed-elshafie.com/",
  resumePlaceholder: "/assets/resume-abdulrahman-elshafie.pdf",
  education: {
    institution: "Cairo University",
    faculty: "Faculty of Computers & Artificial Intelligence",
    degree: "B.Sc. in Artificial Intelligence",
    period: "2020 – 2024",
    field: "Artificial Intelligence, Algorithms, Machine Learning & Software Engineering"
  },
  certifications: [
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      topics: ["Supervised Machine Learning", "Neural Networks & Deep Learning"]
    },
    {
      name: "Digital Marketing Nanodegree",
      issuer: "Udacity",
      topics: ["Performance Marketing", "Conversion Strategy", "Analytics & Acquisition"]
    }
  ]
};
