import React from "react";

export default function MemberDivison({
  id,
  name,
  position,
  shortSummary,
  longSummary,
  profileLink,
  mail,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{position}</p>
      <p>{shortSummary}</p>
      <a href={profileLink} target='_blank' rel='noreferrer'>
        View Profile
      </a>
      <a href={`mailto:${mail}`}>Email</a>
      <hr />
      <button>Learn More</button>
      <br />
    </div>
  );
}
