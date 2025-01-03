import {
  analyticsBlogs,
  genAIBlogs,
  cloudComputingBlogs,
  devOpsBlogs,
  softwareDevBlogs,
  itServicesBlogs,
  digitalMarketingBlogs,
  bigDataBlogs,
  upskillingCareerBlogs,
} from "./blog-arrays/";
import dataScienceQuestionBank from "./blog-arrays/ultimateDAquestionBank";

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
  {
    id: "questionBank001",
    buttonLabel: "Question Banks",
    buttonKey: "questionBank",
  },
];

const questionBankTopics = [
  {
    topicId: "questionBank001",
    topicTitle:
      "The Ultimate SQL Question Bank for Data Analysts and Data Scientists",
    topicQuestionnaire: dataScienceQuestionBank,
  },
  {
    topicId: "questionBank002",
    topicTitle: "Question Bank for Gen AI And MAchine Learning Research",
    topicQuestionnaire: [],
  },
  {
    topicId: "questionBank003",
    topicTitle: "Question Bank for ReactJS and new Features",
    topicQuestionnaire: [],
  },
  // {
  //   topicId: "",
  //   topicTitle: "",
  //   topicQuestionnaire: [],
  // },
];

export const blogDatabase = [
  { id: "blog0", blogKey: "DSBA", database: analyticsBlogs },
  { id: "blog1", blogKey: "GenAI", database: genAIBlogs },
  { id: "blog2", blogKey: "CC", database: cloudComputingBlogs },
  { id: "blog3", blogKey: "DevOps", database: devOpsBlogs },
  { id: "blog4", blogKey: "SDE", database: softwareDevBlogs },
  { id: "blog5", blogKey: "ITSM", database: itServicesBlogs },
  { id: "blog6", blogKey: "DMGH", database: digitalMarketingBlogs },
  { id: "blog7", blogKey: "BGAA", database: bigDataBlogs },
  { id: "blog8", blogKey: "Upskilling", database: upskillingCareerBlogs },
  { id: "q&a", blogKey: "questionBank001", database: questionBankTopics },
];
