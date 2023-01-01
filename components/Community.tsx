import React from "react";

const data = [
  {
    title: "01/",
    description:
      "Relentlessness: RELENTLESSNESS PURSUES THE GOAL WITHOUT ANY OPTION OF QUITTING, EVEN IF OTHERS.",
  },
  {
    title: "02/",
    description:
      "Solidarity: SOLIDARITY FOCUSES ON FOUNDATION, STURDINESS, AND CONCRETE GROUNDWORK FOR YOURSELF AND YOUR IDEAS.. ",
  },
  {
    title: "03/",
    description:
      "Respect: AFFECTING YOUR ESTEEM AND CONFIDENCE, RESPECT PLAYS A ROLE IN YOUR EVERYDAY LIFE THROUGH HONOR AND DIGNITY. ",
  },
  {
    title: "04/",
    description:
      "Integrity: AFFECTING YOUR ESTEEM AND CONFIDENCE, RESPECT PLAYS A ROLE IN YOUR EVERYDAY LIFE THROUGH HONOR AND DIGNITY. ",
  },{
    title: "05/",
    description:
      "Loyalty: AFFECTING YOUR ESTEEM AND CONFIDENCE, RESPECT PLAYS A ROLE IN YOUR EVERYDAY LIFE THROUGH HONOR AND DIGNITY. ",
  
  },
];

export default function Community() {
  return (
    <div className="my-[10rem]">
      <div className="absolute  -z-10 right-0  top-[280vh]">
        <img src="Ellipse18.svg" className="relative " />
      </div>
      <div className="flex flex-col container mx-auto">
        <h1 className="text-5xl sm:text-[80px] flex flex-col align-middle text-yellow-300">
          Our <span>Values</span>{" "}
        </h1>
        <div className="flex flex-wrap   justify-center  items-center">
          {data.map((n, index) => {
            return (
              <div key={index} className="flex flex-col max-w-sm p-5">
                <h1 className="text-[60px] font-mono text-yellow-300">{n.title}</h1>
                <p>{n.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
