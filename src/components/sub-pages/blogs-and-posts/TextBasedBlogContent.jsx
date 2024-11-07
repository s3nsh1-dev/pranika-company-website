import React from "react";

export default function TextBasedBlogContent({
  title,
  intro,
  whyLearn,
  bulletPoints,
}) {
  const renderBulletPoints = bulletPoints.map((bullet) => {
    return (
      <div key={bullet.id}>
        <div>{bullet.pointsTitle}</div>
        {bullet.points.map((point, index) => {
          return <div key={index}>{point}</div>;
        })}
      </div>
    );
  });
  return (
    <div>
      <div>{title}</div>
      <div>{intro}</div>
      <div>
        <div>{whyLearn.title}</div>
        <div>{whyLearn.describes}</div>
      </div>
      <div>{renderBulletPoints}</div>
    </div>
  );
}
