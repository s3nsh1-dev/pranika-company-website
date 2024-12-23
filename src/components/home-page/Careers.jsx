import React from "react";
import SecondryNavbar from "./SecondryNavbar";
import PrimaryFooter from "./PrimaryFooter";
import CareersIntroductionSection from "../branch-pages/CareersIntroductionSection";
import CareerJobCards from "../derived-pages/CareerJobCards";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const jobPostings = [
  {
    id: 0,
    jobTitle: "Digital Marketing Intern",
    jobType: "Internship",
    jobDuration: "3 months",
    jobLocation: "India",
    workMode: "Remote",
    jobResponsibilities:
      "Assist in digital marketing campaigns, conduct market research, and manage social media accounts.",
    companyName: "Pranika Technologies and Consulting Pvt. Ltd.",
    companyWebsite: "https://pranikatech.com/",
    skills: ["Digital Marketing", "Fluent English", "Confidence"],
    keywords: "digital marketing internship remote india",
  },
  {
    id: 1,
    jobTitle: "Power BI Trainer",
    jobType: "Full-Time",
    jobDuration: "Indefinite",
    jobLocation: "India",
    workMode: "Remote",
    jobResponsibilities:
      "Conduct Power BI training sessions, develop training materials, and support trainees.",
    companyName: "Pranika Technologies and Consulting Pvt. Ltd.",
    companyWebsite: "https://pranikatech.com/",
    skills: ["Power BI", "Training and Development", "5 years of experience"],
    keywords: "power bi trainer full time remote",
  },
  {
    id: 2,
    jobTitle: "SQL Trainer",
    jobType: "Full-Time",
    jobDuration: "Indefinite",
    jobLocation: "India",
    workMode: "Remote",
    jobResponsibilities:
      "Conduct SQL training sessions, develop training materials, and support trainees.",
    companyName: "Pranika Technologies and Consulting Pvt. Ltd.",
    companyWebsite: "https://pranikatech.com/",
    skills: ["SQL", "Training and Development", "5 years of experience"],
    keywords: "sql trainer full time remote",
  },
  {
    id: 3,
    jobTitle: "ML/AI Trainer",
    jobType: "Full-Time",
    jobDuration: "Indefinite",
    jobLocation: "India",
    workMode: "Remote",
    jobResponsibilities:
      "Conduct ML/AI training sessions, develop training materials, and support trainees.",
    companyName: "Pranika Technologies and Consulting Pvt. Ltd.",
    companyWebsite: "https://pranikatech.com/",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Training and Development",
      "5 years of experience",
    ],
    keywords: "ml ai trainer remote full time india",
  },
  {
    id: 4,
    jobTitle: "Workday Trainer",
    jobType: "Full-Time",
    jobDuration: "Indefinite",
    jobLocation: "India",
    workMode: "Remote",
    jobResponsibilities:
      "Conduct Workday training sessions, develop training materials, and support trainees.",
    companyName: "Pranika Technologies and Consulting Pvt. Ltd.",
    companyWebsite: "https://pranikatech.com/",
    skills: ["Workday", "Training and Development", "5 years of experience"],
    keywords: "workday trainer remote full time",
  },
];

export default function Careers() {
  const [InputValue, setInputValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const handleClear = () => {
    setInputValue("");
  };
  const handleSearch = () => {
    setSearchValue(InputValue);
  };
  const renderJobs = jobPostings
    .filter((job) =>
      job.keywords.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((job) => {
      return (
        <CareerJobCards
          key={job.id}
          id={job.id}
          title={job.jobTitle}
          type={job.jobType}
          duration={job.jobDuration}
          location={job.jobLocation}
          mode={job.workMode}
          responsibilities={job.jobResponsibilities}
          company={job.companyName}
          website={job.companyWebsite}
          skills={job.skills}
        />
      );
    });

  return (
    <>
      <SecondryNavbar />
      <Box marginBottom={2}>
        <CareersIntroductionSection />

        <Box
          sx={{
            margin: "2%",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            label='Search Job'
            value={InputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ margin: "0px 5px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {InputValue && (
                    <IconButton edge='end' onClick={handleClear}>
                      <CancelIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label='Region'
            sx={{ margin: "0px 5px" }}
            value='India'
            disabled
          />
          <IconButton sx={{ margin: "0px 5px" }} onClick={handleSearch}>
            <SearchIcon color='primary' fontSize='large' />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {renderJobs}
        </Box>
      </Box>
      <PrimaryFooter />
    </>
  );
}
