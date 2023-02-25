import React from "react";
 
import TeamCard from "./TeamCard";

const Team = () => {
  const teamData = [
    {
      name: "Karan Pargal",
      skills: "Fullstack Developer",
      image:
        "https://drive.google.com/uc?export=view&id=1K8QbLjaGeKFvTPAAMO5WPtvho24KxeOk",
      github: "https://www.github.com/karanpargal",
      linkedin: "https://www.linkedin.com/in/karan-pargal-509813211/",
    },
    {
      name: "Yashaswini Singh Shaktawat",
      skills: "Frontend Developer",
      image:
        "https://drive.google.com/uc?export=view&id=1g8mYjzmunb_rUSpY67vu9NvnL7e-c4Zl",
      github: "https://github.com/Yashaswini-Singh02",
      linkedin: "https://www.linkedin.com/in/yashaswini-singh-shaktawat-46b286223/",
    },
    {
      name: "Mehul Dadlani",
      skills: "App Developer",
      image:
        "https://media.licdn.com/dms/image/C4E03AQF09HSJ3h0Syw/profile-displayphoto-shrink_800_800/0/1639947419039?e=1682553600&v=beta&t=HXeVVvw9w_oLOIyw27de14cnwWlASuVJTpIQq9h197M",
      github: "https://github.com/M3hulD",
      linkedin: "https://www.linkedin.com/in/mehul-dadlani-103455146/",
    },
  ];

  return (
    <div className="mt-10 font-display" id="team">
      <p className=" text-4xl text-[#0D3D56] font-bold ml-48 mb-12">Team </p>
      <div className="flex flex-row justify-center gap-10 text-greys px-20 pb-20">
        <TeamCard teamData={teamData[0]} />
        <TeamCard teamData={teamData[1]} />
        <TeamCard teamData={teamData[2]} />
      </div>
    </div>
  );
};

export default Team;