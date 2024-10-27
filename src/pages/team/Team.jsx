import React from 'react';
import { FaLinkedin,FaTwitter, FaEnvelope } from 'react-icons/fa';

function Team() {
  const profiles = [
    { name: "Sireesha", profession: "Web Developer", linkdin: "https://www.linkedin.com/in/johndoe/" },
    { name: "Sribabu", profession: "Web Developer", linkdin: "https://www.linkedin.com/in/johndoe/" },
    { name: "Nakshakthra", profession: "UI/UX Designer", linkdin: "https://www.linkedin.com/in/johndoe/" },
    { name: "Bindu", profession: "Web Developer", linkdin: "https://www.linkedin.com/in/johndoe/" },
    { name: "Dharaneswar", profession: "Web Developer   ", linkdin: "https://www.linkedin.com/in/johndoe/" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {profiles.map(profile => (
        <div key={profile.name} className="h-[300px] w-[300px] border-3 shadow-lg m-4 flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-2 mt-[150px] hover:bg-[#A0A0A0] h-[150px] w-full">
            <div className="text-black text-2xl">{profile.name}</div>
            <div className="text-[#333333]">{profile.profession}</div>
            <div className="flex flex-row gap-[15px]">
            <a href={profile.linkdin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className="text-gray-700" />
            </a>
            <a href={profile.linkdin} target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} className="text-gray-700" />
            </a>
            <a href={profile.linkdin} target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={25} className="text-gray-700" />
            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
