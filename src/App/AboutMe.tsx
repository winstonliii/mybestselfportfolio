import React from 'react';

const baseUrl = '/mybestselfportfolio'; 

const navigation = [
  { name: 'About Me', href: `${baseUrl}/about-me` },
  { name: 'Interviews', href: `${baseUrl}/interviews` },
  { name: 'Assessments', href: `${baseUrl}/assessments` },
  { name: 'Reflections', href: `${baseUrl}/reflections` },
  { name: 'Growth', href: `${baseUrl}/growth` },
];

const AboutMe = () => {
  return (
    <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        About Me
      </h2>
      <div className="mt-4 text-gray-600">
        <p>
          This is the About Me page. Here, you can introduce yourself, your background, 
          and anything else you want visitors to know about you. You might discuss your 
          journey, experiences, or the goals of your portfolio.
        </p>
        {/* Include more paragraphs, images, or other elements as needed. */}
      </div>
    </div>
  );
};

export default AboutMe;
