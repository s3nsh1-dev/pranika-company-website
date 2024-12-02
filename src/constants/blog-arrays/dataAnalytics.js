export const analyticsBlogs = [
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
    id: 6,
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
  {
    id: 1,
    author: "Pranika-Technologies",
    primaryTitle: "The Role of Data Science in Decision Making",
    introduction:
      "Data Science plays a critical role in helping organizations make data-driven decisions, ensuring accuracy and efficiency.",
    why: {
      title: "Why Learn Data Science?",
      describes:
        "Data Science skills are in high demand, offering lucrative career opportunities and enabling better business decisions.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Key Applications of Data Science",
        points: [
          "Customer segmentation for personalized marketing.",
          "Predictive modeling for forecasting sales and trends.",
          "Risk assessment and fraud detection in finance.",
          "Operational efficiency improvements through optimization.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Top Tools in Data Science",
        points: [
          "Python: A versatile programming language for data analysis.",
          "R: Ideal for statistical computing and visualization.",
          "Tableau: For creating interactive data visualizations.",
          "TensorFlow: A powerful library for machine learning.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Getting Started in Data Science",
        points: [
          "Master the basics of Python or R programming.",
          "Learn data visualization and statistical analysis techniques.",
          "Understand machine learning algorithms and their applications.",
        ],
      },
    ],
  },
  {
    id: 2,
    author: "Pranika-Technologies",
    primaryTitle: "Top Data Analytics Techniques for Businesses",
    introduction:
      "Data analytics is key to unlocking business insights and achieving competitive advantage.",
    why: {
      title: "Why Focus on Business Analytics?",
      describes:
        "Business analytics helps organizations uncover patterns and make evidence-based decisions.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Essential Data Analytics Techniques",
        points: [
          "Descriptive Analytics: Understanding past performance.",
          "Predictive Analytics: Forecasting future trends.",
          "Prescriptive Analytics: Recommending actions to achieve goals.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Industries Leveraging Analytics",
        points: [
          "Healthcare: Predicting patient outcomes.",
          "Retail: Inventory management and personalized shopping experiences.",
          "Finance: Credit scoring and fraud detection.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Tools for Business Analytics",
        points: [
          "Microsoft Power BI: For creating data dashboards.",
          "QlikView: A business intelligence tool.",
          "Apache Hadoop: For handling big data.",
        ],
      },
    ],
  },
  {
    id: 3,
    author: "Pranika-Technologies",
    primaryTitle: "Data Storytelling: Turning Data into Insights",
    introduction:
      "Learn how to effectively communicate data insights through compelling storytelling techniques.",
    why: {
      title: "Why Master Data Storytelling?",
      describes:
        "Data storytelling bridges the gap between data analysts and decision-makers.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Components of Data Storytelling",
        points: [
          "Clear narratives backed by data.",
          "Visualizations that enhance understanding.",
          "Actionable recommendations based on insights.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Best Practices",
        points: [
          "Focus on key metrics relevant to your audience.",
          "Use visuals like charts, graphs, and infographics.",
          "Tell a story that connects data to real-world outcomes.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Tools for Data Storytelling",
        points: [
          "Tableau: For building dashboards and visuals.",
          "Canva: To design custom infographics.",
          "PowerPoint: For presenting data stories effectively.",
        ],
      },
    ],
  },
  {
    id: 4,
    author: "Pranika-Technologies",
    primaryTitle: "How Big Data Enhances Business Insights",
    introduction:
      "Explore how big data is revolutionizing business decisions with real-time insights.",
    why: {
      title: "Why Big Data Matters?",
      describes:
        "Big data helps businesses adapt to market changes and understand customer behavior.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Key Characteristics of Big Data",
        points: [
          "Volume: Handling massive datasets.",
          "Velocity: Processing real-time data.",
          "Variety: Managing structured and unstructured data.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Big Data Use Cases",
        points: [
          "Retail: Optimizing pricing strategies.",
          "Healthcare: Predicting patient diagnoses.",
          "Logistics: Improving supply chain efficiency.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Big Data Tools",
        points: [
          "Hadoop: Distributed storage and processing.",
          "Spark: Real-time data analytics.",
          "Kafka: Data streaming and integration.",
        ],
      },
    ],
  },
  {
    id: 5,
    author: "Pranika-Technologies",
    primaryTitle: "Career Opportunities in Data Science",
    introduction:
      "Data Science offers lucrative and diverse career paths for professionals with the right skills.",
    why: {
      title: "Why Pursue a Career in Data Science?",
      describes:
        "Data Science is one of the fastest-growing fields with high demand across industries.",
    },
    contentPoints: [
      {
        id: 0,
        pointsTitle: "Top Career Roles in Data Science",
        points: [
          "Data Scientist: Building predictive models.",
          "Data Analyst: Interpreting data for insights.",
          "Machine Learning Engineer: Creating AI-driven solutions.",
        ],
      },
      {
        id: 1,
        pointsTitle: "Skills Needed",
        points: [
          "Programming in Python, R, or SQL.",
          "Strong mathematical and statistical foundation.",
          "Knowledge of machine learning frameworks.",
        ],
      },
      {
        id: 2,
        pointsTitle: "Future Trends in Data Science Careers",
        points: [
          "Specialization in AI and machine learning.",
          "Focus on ethical data practices.",
          "Emphasis on domain-specific expertise.",
        ],
      },
    ],
  },
];
