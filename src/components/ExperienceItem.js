import React from 'react';

const ExperienceItem = ({ year, company, position, responsibilities }) => {
  return (
    <div className="my-6 text-gray-600">
      <div className="flex flex-col mb-2">
        <div className="font-bold">{company}</div>
        <div className="font-bold">{year}</div>
          <div className="text-sm">{position}</div>
      </div>
      <ul className="list-disc ml-6">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;