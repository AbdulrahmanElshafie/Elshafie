export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  workType: "Hybrid" | "On-site" | "Remote";
  period: string;
  startYear: string;
  endYear: string;
  isDominant: boolean;
  category: "Engineering & AI" | "Machine Learning" | "Marketing & Growth";
  summary: string;
  achievements: string[];
  skills: string[];
  metrics?: Array<{
    label: string;
    value: string;
    note: string;
  }>;
}

export const experiences: ExperienceItem[] = [
  {
    id: "soda-marketing-ai",
    role: "Backend & AI Engineer",
    company: "Soda Marketing AI",
    location: "Giza, Egypt",
    workType: "Hybrid",
    period: "August 2024 – April 2026",
    startYear: "2024",
    endYear: "2026",
    isDominant: true,
    category: "Engineering & AI",
    summary: "Led backend engineering and AI model integrations for marketing automation. Built core Django REST APIs, generative workflows for image/video content, ticketing systems, and social scheduling pipelines.",
    achievements: [
      "Launched AI-powered image and video generation workflows for creating campaign content at scale.",
      "Engineered a full-featured ticketing system for managing user requests with comprehensive tracking and notification lifecycles.",
      "Developed and optimized high-performance Django RESTful APIs for data processing, AI pipelines, and model deployment.",
      "Trained, fine-tuned, and deployed AI models to improve content generation quality and integrated them directly into production workflows.",
      "Integrated multi-account social media scheduling and third-party APIs with real-time error handling, monitoring, and automated alerts.",
      "Optimized backend queries and data processing algorithms for operational reliability and low-latency response times."
    ],
    skills: ["Python", "Django", "Django REST Framework", "AI Workflows", "Model Fine-tuning", "Third-Party APIs", "PostgreSQL", "Real-Time Notifications"]
  },
  {
    id: "techmart",
    role: "SEO & Google Ads Specialist",
    company: "Techmart",
    location: "El-Sheikh Zayed, Egypt",
    workType: "On-site",
    period: "May 2023 – January 2024",
    startYear: "2023",
    endYear: "2024",
    isDominant: false,
    category: "Marketing & Growth",
    summary: "Bridged digital acquisition strategy with technical implementation. Built conversion-focused landing pages, integrated Google Analytics tracking, and developed organic search strategies.",
    achievements: [
      "Built and managed conversion-focused landing pages configured with Google Analytics tracking to accurately measure campaign performance.",
      "Developed and executed SEO strategies to improve website traffic, keyword visibility, and commercial sales leads.",
      "Analyzed user funnel data and behavioral metrics to inform conversion rate optimization and landing page enhancements."
    ],
    skills: ["SEO Strategy", "Google Ads", "Google Analytics", "Conversion Tracking", "Landing Page Optimization", "User Acquisition"]
  },
  {
    id: "bamboogeeks",
    role: "Machine Learning Intern",
    company: "BambooGeeks",
    location: "Remote",
    workType: "Remote",
    period: "June 2023 – July 2023",
    startYear: "2023",
    endYear: "2023",
    isDominant: false,
    category: "Machine Learning",
    summary: "Applied statistical modeling and machine learning pipelines to detect anomalies in highly skewed industrial data.",
    achievements: [
      "Built an end-to-end fraud detection pipeline on a highly imbalanced utility consumption dataset.",
      "Executed exploratory data analysis (EDA), rigorous preprocessing, feature scaling, and class imbalance handling.",
      "Trained and evaluated multiple classification models, achieving ~0.85 precision, recall, and accuracy across evaluation sets."
    ],
    skills: ["Python", "Scikit-learn", "EDA", "Class Imbalance Handling", "Model Evaluation", "Pandas", "NumPy"],
    metrics: [
      {
        label: "Evaluation Metrics",
        value: "~0.85",
        note: "Precision, recall, and accuracy on test splits (technical evaluation metric)"
      }
    ]
  },
  {
    id: "vicitech",
    role: "Digital Marketing Specialist",
    company: "ViciTech",
    location: "Giza, Egypt",
    workType: "Hybrid",
    period: "August 2022 – October 2022",
    startYear: "2022",
    endYear: "2022",
    isDominant: false,
    category: "Marketing & Growth",
    summary: "Drove organic product acquisition and store optimization through search positioning and content distribution.",
    achievements: [
      "Optimized Google Play listing for ASO/SEO, achieving a #1 ranking for the target search term.",
      "Grew corporate LinkedIn followers by 400 organically within a 2-month period through targeted content.",
      "Generated 200 organic mobile app downloads in 1 month via organic search optimization and positioning."
    ],
    skills: ["App Store Optimization (ASO)", "Organic Growth", "Content Strategy", "LinkedIn Marketing", "Search Positioning"],
    metrics: [
      {
        label: "Google Play Ranking",
        value: "#1",
        note: "Achieved top rank for target search term"
      },
      {
        label: "Organic Growth",
        value: "+400",
        note: "Organic LinkedIn followers within 2 months"
      },
      {
        label: "App Downloads",
        value: "+200",
        note: "Organic downloads in 1 month"
      }
    ]
  }
];
