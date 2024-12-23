export const commitmentsDetails = [
  {
    id: 1,
    title: "Expert Instructors",
    details:
      "Our instructors are seasoned professionals with extensive experience in their respective fields. They bring real-world insights and hands-on expertise to the classroom, bridging the gap between theoretical knowledge and practical application.",
    color: "purple",
  },
  {
    id: 2,
    title: "Interactive Learning Experience",
    details:
      "We believe in a hands-on approach to learning. Our courses include interactive sessions, practical exercises, and real-world projects that enable participants to apply what they learn and build a strong portfolio.",
    color: "orange",
  },
  {
    id: 4,
    title: "Career Support",
    details:
      "We are committed to supporting our learners beyond the classroom. Our courses include career guidance, resume building workshops, and interview preparation sessions, designed to help participants confidently step into the job market.",
    color: "green",
  },
  {
    id: 3,
    title: "Flexible Learning Options",
    details:
      "Understanding the diverse needs of our learners, we offer flexible learning formats including online and hybrid courses. This flexibility ensures that our programs are accessible to everyone regardless of their location or schedule.",
    color: "red",
  },
  {
    id: 5,
    title: "Cutting-Edge Resources",
    details:
      "We provide access to the latest tools, software, and resources that are essential for mastering current industry practices. Our learners gain hands-on experience with the technology and platforms used by top companies, ensuring they are well-prepared for the challenges of the modern workplace.",
    color: "yellow",
  },
  {
    id: 0,
    title: "Industry-Relevant Curriculum",
    details:
      "Courses are developed by IT industry experts to ensure they cover the most relevant and up-to-date technologies. Whether it's data analytics, data visualization, data transformation, or data operations, our programs are tailored to provide practical skills that are directly applicable in the workplace.",
    color: "blue",
  },

  {
    id: 6,
    title: "Continuous Learning Support",
    details:
      "Learning doesn’t stop after the course ends. We offer ongoing support through webinars, Q&A sessions, and access to a community of peers and instructors. This continuous learning environment helps our participants stay updated with new trends and refine their skills over time.",
    color: "black",
  },
];

export const courseInformation = [
  {
    id: 0,
    courseName: "Apache Spark",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Foundational Knowledge:",
        about:
          "Start with the basics of Spark, including its history, architecture, and key components like Spark Core, Spark SQL, Spark Streaming, MLlib, and GraphX.",
      },
      {
        id: 222,
        title: "Hands-on Learning:",
        about:
          "Gain practical skills in setting up and managing Spark environments, working with Resilient Distributed Datasets (RDDs), DataFrames, and Datasets, and utilizing Spark SQL for querying data.",
      },
      {
        id: 333,
        title: "Advanced Data Processing:",
        about:
          "Dive into complex data processing techniques, including data transformations, handling missing data, and joining datasets in Spark. Explore the capabilities of Spark Streaming for real-time data processing.",
      },
      {
        id: 444,
        title: "Machine Learning and Graph Processing:",
        about:
          "Learn to implement machine learning algorithms using Spark’s MLlib and explore graph processing with GraphX, including creating and manipulating graphs and performing graph computations.",
      },
      {
        id: 555,
        title: "Performance and Real-World Applications:",
        about:
          "Understand performance tuning, resource management, and debugging techniques for optimizing Spark applications. Engage in project work and case studies to apply your knowledge to real-world scenarios.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/Apache_Spark.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syllabus-Apache_Spark.pdf";
      link.click();
    },
  },
  {
    id: 1,
    courseName: "Hadoop",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Foundational Understanding:",
        about:
          "Gain a solid foundation in Hadoop, covering its history, architecture, and key components like HDFS, MapReduce, and YARN.",
      },
      {
        id: 222,
        title: "Hands-On Experience:",
        about:
          "Practical sessions on setting up Hadoop clusters, writing MapReduce jobs, and using essential ecosystem tools such as Hive, HBase, and Pig.",
      },
      {
        id: 333,
        title: "Advanced Data Processing Techniques:",
        about:
          "Dive into Apache Spark for advanced data processing, including Spark SQL, DataFrames, and real-time data streaming with Spark Streaming.",
      },
      {
        id: 444,
        title: "Data Management and Security:",
        about:
          "Learn best practices for managing large datasets, ensuring data governance, and implementing security measures within Hadoop environments.",
      },
      {
        id: 555,
        title: "Real-World Applications and Future Trends:",
        about:
          "Explore real-world projects and case studies, understand performance tuning and scaling strategies, and stay updated on emerging trends and technologies in the Hadoop ecosystem.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/Introduction_to_Hadoop.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syllabus-Hadoop.pdf";
      link.click();
    },
  },
  {
    id: 2,
    courseName: "Power BI",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Comprehensive Introduction and Setup:",
        about:
          "Detailed overview of Business Intelligence and Power BI components including Desktop, Service, and Mobile. Guided setup with system requirements, installation, and interface overview.",
      },
      {
        id: 222,
        title: "Data Connectivity and Transformation:",
        about:
          "In-depth lessons on connecting to various data sources, including Excel and databases. Extensive coverage of data transformation and cleaning using Power Query Editor.",
      },
      {
        id: 333,
        title: "Advanced Data Modeling and DAX:",
        about:
          "Building robust data models with relationships and cardinality. Mastery of DAX (Data Analysis Expressions) including advanced functions like Time Intelligence.",
      },
      {
        id: 444,
        title: "Visualization and Reporting Excellence:",
        about:
          "Creation of basic to advanced visualizations, including custom visuals and interactive reports. Best practices in report design, including the use of slicers, filters, and bookmarking.",
      },
      {
        id: 555,
        title: "Integration and Real-World Application:",
        about:
          "Integration with other tools such as Excel, Azure, and SharePoint. Real-world case studies and a capstone project to apply learned skills, providing practical experience in creating comprehensive reports.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/Power_BI_Advance_Course.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syllabus-PowerBI.pdf";
      link.click();
    },
  },
  {
    id: 3,
    courseName: "Python",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Comprehensive Learning Path:",
        about:
          "The course offers a well-structured journey from basic to advanced Python concepts, ensuring a solid foundation and deep understanding of the language.",
      },
      {
        id: 222,
        title: "Hands-On Practice:",
        about:
          "Weekly practical exercises and projects are integrated into the curriculum, providing students with real-world applications of the concepts learned, such as control flow, data structures, and file handling.",
      },
      {
        id: 333,
        title: "Advanced Topics and Specializations:",
        about:
          "In-depth exploration of Object-Oriented Programming, error handling, web development with Flask, and data analysis with libraries like NumPy and pandas, preparing students for various fields in software development and data science.",
      },
      {
        id: 444,
        title: "Focus on Industry-Relevant Skills:",
        about:
          "Modules on working with APIs, web scraping, and data visualization equip students with skills that are highly sought after in the industry, making them versatile and job-ready.",
      },
      {
        id: 555,
        title: "Capstone Project and Skills Assessment:",
        about:
          "The course culminates in a final project that synthesizes all the learned concepts, offering students an opportunity to demonstrate their proficiency and apply their skills to a comprehensive, real-world scenario.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/Python.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syllabus-Python.pdf";
      link.click();
    },
  },
  {
    id: 4,
    courseName: "Generative AI",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Foundation to Advanced Generative AI:",
        about:
          "Gain a thorough understanding of Generative AI, including its history, fundamental concepts, and key technologies such as neural networks, GANs, and VAEs.",
      },
      {
        id: 222,
        title: "Hands-on Experience with Cutting-Edge Models:",
        about:
          "Learn to implement and work with advanced generative models, including Transformer-based models like GPT, and gain practical experience in text and image generation.",
      },
      {
        id: 333,
        title: "Practical Applications and Real-World Use Cases:",
        about:
          "Explore diverse applications of Generative AI in fields such as NLP, content creation, art, and media, and understand the practical challenges and solutions in these areas.",
      },
      {
        id: 444,
        title: "Ethical Considerations and Responsible AI:",
        about:
          "Discuss the ethical implications of Generative AI, including issues like bias and misuse, and learn about responsible AI practices and emerging trends in the field.",
      },
      {
        id: 555,
        title: "Capstone Project and Skills Assessment:",
        about:
          "Engage in a hands-on project that consolidates learning, allowing for the practical application of skills, followed by a comprehensive review and presentation of the work.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/Gen_AI.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syllabus-GenAI.pdf";
      link.click();
    },
  },
  {
    id: 5,
    courseName: "SQL",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Foundational Knowledge in SQL and Databases:",
        about:
          "Introduction to SQL and different database types, including relational and non-relational databases. Understanding and setting up a SQL environment with popular DBMS like MySQL, PostgreSQL, and SQLite.",
      },
      {
        id: 222,
        title: "Data Manipulation and Querying Techniques:",
        about:
          "Mastering Data Definition Language (DDL) and Data Manipulation Language (DML) commands for creating, modifying, and managing databases. Developing skills in writing basic and complex queries, including filtering, sorting, and joining data.",
      },
      {
        id: 333,
        title: "Advanced Data Handling and Optimization:",
        about:
          "In-depth exploration of advanced filtering techniques, aggregation functions, and set operations. Learning to handle NULL values and applying constraints like primary keys, foreign keys, and other database integrity measures.",
      },
      {
        id: 444,
        title: "Performance Optimization and Indexing:",
        about:
          "Techniques for creating and using indexes to enhance query performance. Understanding query optimization strategies using tools like EXPLAIN and ANALYZE.",
      },
      {
        id: 555,
        title: "Specialized SQL Features and Real-world Applications:",
        about:
          "Introduction to advanced SQL features such as transactions, concurrency control, stored procedures, and triggers. Practical applications in database design, normalization, and data analysis, including integration with Business Intelligence (BI) tools and visualization.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/SQL.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syllabus-SQL.pdf";
      link.click();
    },
  },
  {
    id: 6,
    courseName: "Machine Learning",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Comprehensive Curriculum:",
        about:
          "The course covers a wide range of topics from the fundamentals of machine learning to advanced techniques, including supervised and unsupervised learning, neural networks, deep learning, and natural language processing.",
      },
      {
        id: 222,
        title: "Hands-On Practice:",
        about:
          "Each week includes practical sessions using popular Python libraries such as scikit-learn, pandas, NumPy, TensorFlow, and Keras, ensuring students gain real-world experience with data preprocessing, model building, and evaluation.",
      },
      {
        id: 333,
        title: "Mathematical and Statistical Foundations:",
        about:
          "Early weeks focus on essential mathematical concepts like linear algebra, calculus, and probability, which are crucial for understanding and implementing machine learning algorithms effectively.",
      },
      {
        id: 444,
        title: "Diverse Learning Techniques:",
        about:
          "The course encompasses various learning approaches, including regression, classification, clustering, dimensionality reduction, and advanced models like support vector machines and ensemble methods.",
      },
      {
        id: 555,
        title: "Ethics and Capstone Project:",
        about:
          "Students explore critical topics such as bias, fairness, and interpretability in AI. The course culminates in a capstone project where students apply their knowledge to a real-world problem, from problem selection and data collection to model building and presentation.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/Machine_Learning.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syllabus-Machine_Learning.pdf";
      link.click();
    },
  },
  {
    id: 7,
    courseName: "ReactJS",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
    content: [
      {
        id: 111,
        title: "Introduction to React.js and Frontend Development:",
        about:
          "Begin with the fundamentals of React.js, including the library's architecture, virtual DOM, and JSX. Understand how React.js fits into modern frontend development.",
      },
      {
        id: 222,
        title: "Component-Based Architecture and State Management:",
        about:
          "Learn about React's component-based structure, creating and managing components, props, and state. Explore advanced state management techniques using Context API and Redux.",
      },
      {
        id: 333,
        title: "Routing, API Integration, and Asynchronous Data Handling:",
        about:
          "Master React Router for creating multi-page applications. Learn to integrate with APIs, handle asynchronous data fetching, and manage side effects effectively.",
      },
      {
        id: 444,
        title: "Project-Based Learning and Real-World Application:",
        about:
          "Learn about deploying React applications, setting up build processes, and ensuring applications are production-ready. Understand the importance of CI/CD, testing, and monitoring in maintaining robust applications.",
      },
      {
        id: 555,
        title: "Career Development and Industry Insights:",
        about:
          "Gain insights into the frontend development industry, including career paths, job market trends, and essential skills. Prepare for job interviews with a focus on React.js, showcasing project work, and building a portfolio.",
      },
    ],
    downloadPDF: function () {
      const url = "../../../extra/Pranika_Technologies.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Coming_Soon.pdf";
      link.click();
    },
  },
];

export const pageHeadTitle = "How do we help with upskilling?";
export const pageHeadContent =
  "At Pranika Technologies and Consulting Pvt. Ltd., we are committed to equipping individuals with the skills and knowledge necessary to excel in today’s rapidly evolving technological landscape. Our courses are carefully designed to meet the current demands of the industry, focusing on the latest trends and advancements in technology.";
