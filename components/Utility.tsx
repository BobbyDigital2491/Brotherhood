import React from "react";

const data = [
  {
    title: "01/",
    description:
      "The power of walking and talking with Confidence.",
  },
  {
    title: "02/",
    description:
      "Decision Making. ",
  },
  {
    title: "03/",
    description:
      "Goal setting and Goal getting. ",
  },
  
];

export default function Community() {
  return (
    <div className="my-[10rem]">
      <div className="absolute  -z-10 right-0  top-[280vh]">
        <img src="Ellipse18.svg" className="relative " />
      </div>
      <div className="flex flex-col container mx-auto">
        <h1 className="text-5xl sm:text-[80px] flex flex-col align-middle center text-yellow-300">
          List of <span> Programs</span>{" "}
        </h1>
        <br/>
        <li className="center">- The power of walking and talking with Confidence</li>
        <li className="center">- Decision Making</li>
        <li className="center">- Goal setting and Goal getting</li>
        <li className="center">- Purpose drives Outcome</li>
        <li className="center">- The power of words</li>
        <li className="center">- Confidence, Self- Esteem and Self- Image</li>
        <li className="center">- The power of Dignity and Pride</li>
        <li className="center">- My vision keeps ME sane</li>
        <li className="center">- The Power of Positivity and Change</li>
        <li className="center">- Stick-to-itiveness and resilience</li>
        <li className="center">- The rule of 72</li>
        <li className="center">- How to invest like the Banks do</li>
        
          
        </div>
      </div>
   
  );
}
