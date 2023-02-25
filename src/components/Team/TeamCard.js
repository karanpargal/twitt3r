import React from "react";

const TeamCard = (props) => {
  return (
    <div>
      <div className="flex flex-col w-96 ">
        <img
          src={props.teamData.image}
          alt=""
          className="self-center w-96 h-96 rounded-xl"
        />
        <div >
          <h1 className="font-bold ml-1 text-2xl text-center py-1">
            {props.teamData.name}
          </h1>
          <div className="text-xl m-0 text-center">
            <h1 className="font-medium ml-1 py-1 text-center">
            {props.teamData.skills}
            </h1>
          </div>
          <div className="flex font-medium  text-lg py-1 mt-2 text-center items-center justify-around ">
            <a target="_blank" rel="noreferrer" href={props.teamData.github} class="text-darkerIndigo bg-white hover:text-blue-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg  px-5 py-1 text-center">Github</a>
            <a href={props.teamData.linkedin} class="text-darkerIndigo bg-white hover:text-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg  px-5 py-1 text-center">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;