import React from 'react';
import ExperienceItem from './ExperienceItem';

const ExperienceList = () => {
  const experiences = [
    {
      year: '2020 - Present',
      company: 'PT Tempo Scan Pacific Tbk',
      position: 'QC Raw Material NIR',
      responsibilities: [
        'Responsible for conducting inspections on materials or raw production materials in the raw material and packaging material warehouse.',
      ],
    },
    {
      year: '2019 - 2020',
      company: 'CV EGC Penerbit Buku Kedokteran',
      position: 'Staff Setter',
      responsibilities: [
        'Setting/managing manuscripts as needed',
        'Creating layouts according to size',
        'Working on initial settings',
        'Creating finishing files',
        'Creating backup files to computer server data and CD.',
      ],
    },
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          year={experience.year}
          company={experience.company}
          position={experience.position}
          responsibilities={experience.responsibilities}
        />
      ))}
    </div>
  );
};

export default ExperienceList;