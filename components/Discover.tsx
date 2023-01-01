import React from "react";
import { NftCardWithButton } from "./NftCard";

const data = [
  {
    image: "head.jpeg",
  },
  {
    image: "next.jpeg",
  },
  {
    image: "gold.jpeg",
  },
  

];

export default function Discover() {
  return (
    <div className="flex flex-col my-10  px-10 ">
      <div className="flex py-10 ">
        <h1 className="text-5xl sm:text-[80px]">Program Highlights</h1>
      </div>        
      <li>Entrepreneurship</li>
      <li>Financially Literacy</li>
      <li>Economic Development</li>
      <li>Community Service</li>
      <li>Business Shadowing</li>
      <li>Universal Laws of Success</li>
    </div>
  );
}
