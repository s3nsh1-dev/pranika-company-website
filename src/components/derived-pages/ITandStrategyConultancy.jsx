import React from "react";
import ShowITConsultancyStack from "../branch-pages/ShowITConsultancyStack";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import ShowWhyUsForConsultancy from "../branch-pages/ShowWhyUsForConsultancy";
import ShowItConsultancyFooter from "../branch-pages/ShowItConsultancyFooter";
import tailored from "../../images/Tailored-Solutions.jpg";
import expert from "../../images/Expert-Team.png";
import innovate from "../../images/Innovative-Approach.jpg";
import track from "../../images/Proven-Track-Record.jpg";
import end from "../../images/End-to-End-Support.png";
import strategic from "../../images/Strategic-Insights.jpg";

const partnerUsData = [
  {
    id: 0,
    title: "Tailored Solutions",
    content:
      "We understand that every business is unique. Our consulting services are customized to fit your specific needs, ensuring that you get the most relevant and effective solutions.",
    image: tailored,
  },
  {
    id: 1,
    title: "Expert Team",
    content:
      "Our team comprises highly skilled professionals with extensive experience in various technologies. We bring a wealth of knowledge and practical expertise to every project, ensuring high-quality outcomes.",
    image: expert,
  },
  {
    id: 2,
    title: "Innovative Approach",
    content:
      "We stay ahead of industry trends and emerging technologies. Our commitment to innovation means you benefit from the latest advancements and best practices.",
    image: innovate,
  },
  {
    id: 3,
    title: "Proven Track Record",
    content:
      "We have a history of successfully delivering projects that enhance efficiency, drive growth, and create value for our clients. Our track record speaks to our ability to meet and exceed expectations.",
    image: track,
  },
  {
    id: 4,
    title: "End-to-End Support",
    content:
      "From initial consultation to implementation and beyond, we offer comprehensive support throughout the entire project lifecycle. Your success is our priority.",
    image: end,
  },
  {
    id: 5,
    title: "Strategic Insights",
    content:
      "Our strategy consulting services go beyond technology. We provide strategic insights and actionable recommendations that align with your business goals and drive long-term success.",
    image: strategic,
  },
];

const title = "Why Choose Our Consulting Services?";
const titleContent =
  "In today's fast-paced and technology-driven world, businesses need more than just basic IT support—they need strategic, cutting-edge solutions that drive growth, efficiency, and innovation. At Pranika Technologies and Consulting Pvt. Ltd., we specialize in delivering top-tier IT and strategy consulting services designed to help you harness the full potential of modern technologies and achieve your business goals.";
export default function ITandStrategyConultancy() {
  return (
    <>
      <ShowPageDescriptionAndLinks title={title} content={titleContent} />
      <ShowITConsultancyStack />
      <ShowWhyUsForConsultancy partnerUsData={partnerUsData} />
      <ShowItConsultancyFooter />
    </>
  );
}
