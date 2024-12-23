// git test
export const navigationLinks = {
  home: { navTo: "/home", text: "Home" },
  services: {
    itServicesLinks: [
      {
        id: 0,
        dataAnalytics: { navTo: "/data-analytics", text: "Data Analytics" },
      },
      {
        id: 1,
        dataTransformation: {
          navTo: "/data-transformation",
          text: "Data Transformation",
        },
      },
      {
        id: 2,
        dataOperations: { navTo: "/data-operations", text: "Data Operations" },
      },
    ],
    commonServices: [
      {
        id: 0,
        jobSupport: {
          navTo: "/job-support-india",
          text: "Project Consultation",
        },
      },
      {
        id: 1,
        digitalMarketing: {
          navTo: "/digital-marketing",
          text: "Digital Marketing",
        },
      },
      { id: 2, training: { navTo: "/training", text: "Training Programs" } },
      {
        id: 3,
        consultRecruit: {
          navTo: "/consult-recruit",
          text: "Consultancy & Recruitment",
        },
      },
    ],
  },
  knowUs: [
    { id: 0, about: { navTo: "/about", text: "Company insights" } },
    { id: 1, blogPost: { navTo: "/blogs-and-posts", text: "Blogs and Posts" } },
  ],
  missionVision: { navTo: "/mission&vision", text: "Mission and Vision" },
  careers: { navTo: "/careers", text: "Careers" },
  contact: { navTo: "/contact", text: "Contact us" },
  portfolio: { navTo: "/portfolio", text: "Portfolio" },
};
