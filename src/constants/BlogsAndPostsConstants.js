export const textBasedContent = [];

export const blogButtonLabels = [
  {
    id: 0,
    buttonLabel: "Data Science & Business Analytics",
    buttonKey: "DSBA",
  },
  { id: 1, buttonLabel: "AI & Machine Learning & Gen AI", buttonKey: "GenAI" },
  { id: 2, buttonLabel: "Cloud Computing", buttonKey: "CC" },
  {
    id: 3,
    buttonLabel: "DevOps & SRE (Site Reliability Engineering)",
    buttonKey: "DevOps",
  },
  { id: 4, buttonLabel: "Software Development", buttonKey: "SDE" },
  {
    id: 5,
    buttonLabel: "IT Service Management & Enterprise Architecture",
    buttonKey: "ITSM",
  },
  {
    id: 6,
    buttonLabel: "Digital Marketing & Growth Hacking",
    buttonKey: "DMGH",
  },
  { id: 7, buttonLabel: "Big Data and advance analytics", buttonKey: "BGAA" },
  {
    id: 8,
    buttonLabel: "Career Fast-track & Professional Upskilling",
    buttonKey: "Upskilling",
  },
];

const DSBAarray = [
  {
    id: "dataAnalyticsIntro01",
    author: "Pranika-Technologies",
    primaryTitle: "Getting Started with Data Analytics: Key Concepts and Tools",
    introduction:
      "Data analytics is transforming the way businesses make decisions by providing insights from raw data. In this article, we’ll explore the basics of data analytics, popular tools, and how you can start building data-driven skills.",
    why: {
      title: "What is Data Analytics?",
      describes:
        "Data analytics involves examining datasets to draw conclusions about the information they contain. It uses tools and techniques from statistics and machine learning, among others, to identify patterns and make data-driven decisions.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Types of Data Analytics",
        points: [
          "Descriptive Analytics: What happened?",
          "Diagnostic Analytics: Why did it happen?",
          "Predictive Analytics: What is likely to happen?",
          "Prescriptive Analytics: What should we do?",
        ],
      },
      {
        id: 1,
        pointsTitle: "Popular Data Analytics Tools",
        points: [
          "Excel: Essential for small data analysis and initial explorations.",
          "Tableau: Great for data visualization and reporting.",
          "Python & R: Programming languages widely used for advanced analytics.",
          "Power BI: Microsoft’s analytics tool for creating visual insights.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Getting Started Tips",
        points: [
          "Begin with Excel or Power BI to build foundational skills.",
          "Practice analyzing real datasets.",
          "Explore statistical basics to interpret data effectively.",
        ],
      },
    ],
  },
  {
    id: 4,
    author: "Pranika-Technologies",
    primaryTitle:
      "Mastering SQL for Data Analysis: Essential Queries and Techniques",
    introduction:
      "SQL is the backbone of data analysis, allowing analysts to query, manipulate, and manage data stored in relational databases. Here, we’ll cover essential SQL queries and techniques for data analysis.",
    why: { title: "", describes: "" },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Essential SQL Queries",
        points: [
          "SELECT: Used to retrieve data from tables. Example: SELECT * FROM customers;",
          "WHERE: Filters records based on specified conditions. Example: SELECT * FROM sales WHERE amount > 5000;",
          "GROUP BY: Groups records to perform aggregate calculations. Example: SELECT product, SUM(quantity) FROM orders GROUP BY product;",
          "JOINs: Combine data from multiple tables, such as INNER JOIN, LEFT JOIN, and RIGHT JOIN.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Advanced SQL Techniques",
        points: [
          "Window Functions: Perform calculations across a set of table rows related to the current row. Example: SELECT product, RANK() OVER (ORDER BY sales DESC) FROM products;",
          "Subqueries: Nested queries used within another query to achieve complex results.",
          "Common Table Expressions (CTEs): Temporary result sets for readable, organized queries.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Best Practices for Writing SQL Queries",
        points: [
          "Use clear, consistent naming conventions.",
          "Indent and format queries for readability.",
          "Always test queries on a smaller dataset before running them on production data.",
        ],
      },
    ],
  },
];
const BGAAarray = [
  {
    id: 1,
    author: "Pranika-Technologies",
    primaryTitle: "Transforming Data with Power BI: A Step-by-Step Guide",
    introduction:
      "Power BI is a powerful data visualization and transformation tool that allows users to turn raw data into actionable insights. This guide will walk you through essential data transformation steps in Power BI to help you make the most of your data.",
    why: {
      title: "Why Power BI for Data Transformation?",
      describes:
        "Power BI’s Power Query editor allows users to perform various data transformation tasks easily. It’s ideal for combining, cleaning, and shaping data from multiple sources, making it ready for visualizations.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Key Data Transformation Techniques",
        points: [
          "Importing Data: Power BI supports various sources like Excel, SQL, and online sources.",
          "Removing Duplicates: This helps clean data, ensuring accuracy in analysis.",
          "Splitting Columns: Break complex columns into simpler ones for easier interpretation.",
          "Merging Datasets: Use Append Queries to combine data from multiple sources.",
          "Creating Custom Columns: Use DAX (Data Analysis Expressions) to create custom calculations.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Tips for Efficient Data Transformation",
        points: [
          "Preview data changes in the Power Query editor.",
          "Use steps to track transformations, which you can easily edit or revert.",
          "Practice with sample datasets to learn each transformation technique.",
        ],
      },
    ],
  },
  {
    id: 2,
    author: "Pranika-Technologies",
    primaryTitle:
      "Data Operations: Ensuring Seamless Data Management and Analysis",
    introduction:
      "Data operations (DataOps) is a critical part of any organization’s data strategy, ensuring efficient, reliable, and secure data management for analytics. This article covers the basics of DataOps, key practices, and the tools that make it possible.",
    why: {
      title: "What is DataOps?",
      describes:
        "DataOps combines the practices of data engineering and data management with DevOps principles to ensure data workflows are fast, accurate, and collaborative. It’s aimed at improving the quality and efficiency of data-related tasks in businesses.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Key DataOps Practices",
        points: [
          "Data Pipeline Automation: Automates data ingestion, transformation, and storage.",
          "Data Quality Monitoring: Ensures that data is clean and reliable.",
          "Version Control for Data: Keeps track of data changes to ensure traceability.",
          "Collaboration and Transparency: Involves cross-functional teams, fostering a collaborative approach to data handling.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Tools for DataOps",
        points: [
          "Apache Airflow: For scheduling and managing complex workflows.",
          "Snowflake: Cloud-based data warehousing for scalable data storage.",
          "Git for Data: Enables version control for data, similar to source code.",
          "DataDog: For monitoring and observability of data processes.",
        ],
      },
    ],
  },
];
const DMGHarray = [
  {
    id: 3,
    author: "Pranika-Technologies",
    primaryTitle:
      "Digital Marketing in 2024: Trends and Tools You Need to Know",
    introduction:
      "Digital marketing has become essential for businesses aiming to reach online audiences. As we move into 2024, certain trends and tools stand out for marketers looking to engage audiences effectively.",
    why: { title: "", describes: "" },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Top Digital Marketing Trends in 2024",
        points: [
          "AI-Driven Content Creation: AI tools like ChatGPT are making content creation faster and more personalized.",
          "Video Marketing: Short-form videos (YouTube Shorts, TikTok) continue to drive engagement.",
          "Voice Search Optimization: With voice assistants, optimizing for voice search is becoming crucial.",
          "Personalization: Tailoring content to individual user interests improves engagement.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Essential Digital Marketing Tools",
        points: [
          "Google Analytics 4 (GA4): Provides valuable insights into customer behavior and engagement.",
          "Ahrefs & SEMrush: SEO tools for keyword research, competitor analysis, and link building.",
          "Hootsuite: For social media scheduling and analytics.",
          "Mailchimp: An email marketing tool for managing and automating campaigns.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Getting Started Tips",
        points: [
          "Identify your audience and choose the right platforms.",
          "Set measurable goals for each campaign (traffic, engagement, conversions).",
          "Experiment with different content types to see what resonates most with your audience.",
        ],
      },
    ],
  },
];
export const blogDatabase = [
  { id: "blog0", blogKey: "DSBA", database: DSBAarray },
  { id: "blog1", blogKey: "GenAI", database: [] },
  { id: "blog2", blogKey: "CC", database: [] },
  { id: "blog3", blogKey: "DevOps", database: [] },
  { id: "blog4", blogKey: "SDE", database: [] },
  { id: "blog5", blogKey: "ITSM", database: [] },
  { id: "blog6", blogKey: "DMGH", database: DMGHarray },
  { id: "blog7", blogKey: "BGAA", database: BGAAarray },
  { id: "blog8", blogKey: "Upskilling", database: [] },
];
