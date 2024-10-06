import React from "react";
import { Helmet } from "react-helmet";

export default function GenericKeywords() {
  return (
    <>
      <Helmet>
        <title>Pranika Technologies</title>
        <meta
          name='description'
          content='Pranika Technologies offers services in IT consulting, data analytics, data transformation, and more to help businesses optimize their operations.'
        />
        <meta
          name='keywords'
          content='IT consulting, data analytics, data transformation, Pranika Technologies, Job Support India, Job Support, Project Support'
        />
      </Helmet>
    </>
  );
}
