export const offeredServices = [
  {
    id: 1,
    serviceName: "Cloud Solutions & Infrastructure",
    offeredSubServices: [
      {
        id: 0,
        subServiceName: "Cloud Migration",
        subServiceDetail:
          "Seamlessly move your business to the cloud with minimal downtime.",
      },
      {
        id: 1,
        subServiceName: "Cloud Management",
        subServiceDetail:
          "Optimized cloud solutions, offering enhanced performance and cost savings.",
      },
      {
        id: 2,
        subServiceName: "Hybrid Cloud Solutions",
        subServiceDetail:
          "Combine on-premises and cloud solutions to maximize flexibility.",
      },
    ],
  },
  {
    id: 2,
    serviceName: "Data Analytics & Business Intelligence",
    offeredSubServices: [
      {
        id: 0,
        subServiceName: "Data Engineering",
        subServiceDetail:
          "Build robust data pipelines using technologies like Azure Data Factory and SSIS.",
      },
      {
        id: 1,
        subServiceName: "Data Visualization",
        subServiceDetail:
          "Create actionable insights with tools like Power BI and Tableau.",
      },
      {
        id: 2,
        subServiceName: "Machine Learning & AI",
        subServiceDetail:
          "Predict future trends and automate decision-making with advanced analytics.",
      },
    ],
  },
  {
    id: 3,
    serviceName: "DevOps & Automation",
    offeredSubServices: [
      {
        id: 0,
        subServiceName: "Continuous Integration/Continuous Deployment",
        subServiceDetail:
          "Accelerate your software delivery with automated pipelines.",
      },
      {
        id: 1,
        subServiceName: "Infrastructure as Code",
        subServiceDetail:
          "Automate infrastructure management and reduce manual intervention.",
      },
      {
        id: 2,
        subServiceName: "Azure & AWS DevOps Services",
        subServiceDetail:
          "Tailored solutions to manage and scale your cloud infrastructure.",
      },
    ],
  },
  {
    id: 4,
    serviceName: "Custom Software Development",
    offeredSubServices: [
      {
        id: 0,
        subServiceName: "Web & Mobile Applications",
        subServiceDetail:
          "Design, develop, and maintain custom software tailored to your business needs.",
      },
      {
        id: 1,
        subServiceName: "Full-Stack Development",
        subServiceDetail: "Expertise in Java, .NET, ReactJS, and more.",
      },
      {
        id: 2,
        subServiceName: "Integration Solutions",
        subServiceDetail:
          "Seamless integration of third-party applications into your existing systems.",
      },
    ],
  },
  {
    id: 5,
    serviceName: "IT Consulting & Strategy",
    offeredSubServices: [
      {
        id: 0,
        subServiceName: "Digital Transformation Strategy",
        subServiceDetail:
          "Navigate the complexities of digital change with expert guidance.",
      },
      {
        id: 1,
        subServiceName: "IT Infrastructure Assessment",
        subServiceDetail:
          "Evaluate and optimize your current systems for peak performance.",
      },
      {
        id: 2,
        subServiceName: "Security & Compliance",
        subServiceDetail:
          "Protect your data and ensure compliance with the latest security standards.",
      },
    ],
  },
  {
    id: 6,
    serviceName: "Managed IT Services",
    offeredSubServices: [
      {
        id: 0,
        subServiceName: "24/7 IT Support",
        subServiceDetail:
          "Round-the-clock support for troubleshooting and technical assistance.",
      },
      {
        id: 1,
        subServiceName: "Network Monitoring",
        subServiceDetail:
          "Proactive management and monitoring to prevent disruptions.",
      },
      {
        id: 2,
        subServiceName: "Disaster Recovery & Backup",
        subServiceDetail:
          "Ensure business continuity with tailored disaster recovery plans.",
      },
    ],
  },
];

export const caseStudies = [
  {
    id: 1,
    imgSrc: "",
    project: "One Data",
    customer: "Smart DCC, UK",
    tools: "",
    database: "Microsoft SQL Server",
    ETL_tools: "Azure Data Factory, API Management Services, SSIS, SSAS",
    reportingAndVisualTools: "MSBI Stack (Power BI), Tableau, SSRS",
    description: `Led the management and development of smart metering system projects for Smart DCC, a UK-based customer. Responsibilities included offshore coordination and system enhancement efforts to improve the functionality and performance of the system. The project utilized a combination of advanced data engineering technologies such as Azure Data Factory for ETL processes, and Microsoft SQL Server for database management. Additionally, the project involved using Power BI and SSRS for reporting, which streamlined data visualization and reporting for stakeholders.`,
  },
  {
    id: 2,
    imgSrc: "",
    project: "Liberty Mutual Group",
    customer: "Liberty Specialty Market",
    tools: "MSBI Stack [Power BI], SSRS",
    database: "Microsoft SQL Server",
    ETL_tools: "Azure Data Factory, API Management Services, SSIS, SSAS",
    reportingAndVisualTools: "MSBI Stack (Power BI), SSRS",
    description: `This project was centered on Liberty Mutual Group, specifically for its business division, Liberty Specialty Market (LSM). The primary goal of the project was to enhance and streamline underwriting and claims handling processes, ensuring better efficiency in operations for Liberty Mutual’s global insurance and reinsurance markets. By implementing these advanced data processing and reporting tools, the project significantly enhanced Liberty Mutual's underwriting and claims management capabilities. It reduced processing times, improved the accuracy of underwriting decisions, and provided actionable insights into claims patterns, which resulted in better financial outcomes and risk mitigation for the business. Additionally, the project established a scalable infrastructure to support future growth and more complex data analytics requirements.`,
  },
  {
    id: 3,
    imgSrc: "",
    project: "RLB UK",
    customer: "RLB (Rider Levett Bucknall)",
    tools: "MSBI Stack [Power BI]",
    database: "Microsoft SQL Server",
    ETL_tools:
      "SSIS (SQL Server Integration Services), SSAS (SQL Server Analysis Services), Azure Data Factory (ADF), Azure Synapse",
    reportingAndVisualTools: "Power BI",
    description: `The project involved migrating data from legacy systems into the Customer Relationship Management (CRM) system using SSIS packages. I was responsible for designing and developing these SSIS packages to ensure smooth and efficient data transfer. Additionally, I built Power BI dashboards, which provided business insights by visualizing the migrated data. These dashboards enabled decision-makers to monitor key metrics and trends. The integration of SSAS, ADF, and Azure Synapse streamlined data processing and helped optimize performance for complex data analytics.`,
  },
];

export const whyChooseUs = [
  {
    id: 0,
    topic: "Industry Experts",
    detail:
      "Our certified professionals bring a wealth of experience across various IT domains.",
  },
  {
    id: 1,
    topic: "Client-Centric Approach",
    detail:
      "We tailor our solutions to meet the specific needs of your business.",
  },
  {
    id: 2,
    topic: "Cost-Effective Solutions",
    detail: "Get more value with scalable and affordable IT services.",
  },
  {
    id: 3,
    topic: "Proven Track Record",
    detail:
      "Successfully delivering projects across industries, with a focus on quality and innovation.",
  },
];

export const ourTechStack = [
  { id: 0, category: "Cloud", stack: ["Azure", "AWS", "Google Cloud"] },
  {
    id: 1,
    category: "Data Tools",
    stack: ["PowerBI", "Azure Data Factory", "SSIS", "Data Bricks"],
  },
  {
    id: 2,
    category: "Data Science",
    stack: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLM and LIM Model",
      "Gen AI",
      "etc.",
    ],
  },
  {
    id: 3,
    category: "DevOps Tools",
    stack: ["Jenkins", "Kubernetes", "Docker", "Terraform"],
  },
  {
    id: 4,
    category: "Languages",
    stack: ["ReactJS", "Java", "Python", "JavaScript", "TypeScript"],
  },
];
