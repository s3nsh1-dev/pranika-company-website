import React from "react";
import MemberDivison from "./MemberDivison";

const aboutTeam = [
  {
    id: 0,
    name: "Kamal Shukla",
    position: "",
    shortSummary:
      "12 years as MSBI professional, specializing in Power BI, SQL, and Azure. Helping others to indroduce with professional Data Analytics.",
    longSummary:
      "I have approx. 12 years of experience in IT and I am an MSBI Professional with expertise in POWER BI,SQL and AZURE DATA FACTORY. Seeking for a job which gives me an opportunity to develop myself as well as the organisation by enhancing my skills as well as giving me a scope to contribute my knowledge, ideas and hard work towards growth of the organisation. And willing to work on any technology.",
    profileLink: "https://www.linkedin.com/in/kamalshuklaptech/",
    mail: "kamal.shukla@pranikatech.com",
  },
  {
    id: 1,
    name: "Abhishek Pandey",
    position: "",
    shortSummary:
      "HR analyst with 10+ years of experience, adept in recruitment, data analysis, and handling US clients. Proficient in Excel, Power BI, and SQL.",
    longSummary:
      "An adept HR analyst with a proven track record in extracting actionable insights from diverse datasets. Holds a Bachelor's degree in Pharmacy and an MBA in operations and finance. Demonstrates over a decade of proficiency in recruitment processes, from candidate sourcing to successful placements, coupled with extensive experience in handling US clients. Proficient in Excel, Power BI, and SQL, with a keen ability to utilize job boards and ATS systems effectively.",
    profileLink: "https://www.linkedin.com/in/abhishekalld/",
    mail: "Abhishek.p@pranikatech.com",
  },
  {
    id: 2,
    name: "Raj Goswami",
    position: "",
    shortSummary:
      "Full Stack ReactJS Developer and freelancer. With expertise in web applications, delivering high-quality, data-driven solutions.",
    longSummary:
      "Ram Goswami is a seasoned Full Stack ReactJS Developer with extensive experience in creating dynamic and responsive web applications. Currently working as a freelancer, Ram specializes in leveraging ReactJS to develop comprehensive, user-friendly interfaces and robust back-end systems. His expertise spans across JavaScript, TypeScript, HTML, CSS, and a variety of other web development technologies. With a strong focus on delivering high-quality, data-driven solutions, Ram has successfully led numerous projects that integrate seamlessly with data analytics tools, enhancing both user experience and functionality.",
    profileLink: "https://www.youtube.com/@RAMGI635",
    mail: "ram.goswami@pranikatech.com",
  },
];
export default function TeamSummary() {
  const renderMemberDivision = aboutTeam.map((member) => {
    return (
      <MemberDivison
        key={member.id}
        id={member.id}
        name={member.name}
        position={member.position}
        shortSummary={member.shortSummary}
        longSummary={member.longSummary}
        profileLink={member.profileLink}
        mail={member.mail}
      />
    );
  });
  return <div>{renderMemberDivision}</div>;
}
