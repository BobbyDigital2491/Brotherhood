import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-8 flex-col  text-left px-2   ">
          
          <h1 className="text-5xl sm:text-[80px] font-bold text-yellow-300">Our Program</h1>
          <br/>
          <img src="cc.jpg" />
          <br/>
          <br/>
          <p className="max-w-lg text-xl ">
          The Brotherhood Academy’s goal is to expose our young Kings to various aspects of 
          entrepreneurship, innovation, and business, while giving them the opportunity to create 
          for themselves and generate an income while in school. We’ve created 6 departments that 
          align with the success and overall growth of a stable community and economy. Those 
          departments being Agricultural Science, Financial Literacy, S.T.E.A.M, Media Film & 
          Production, Real Estate & Development, and Auto Sales and Logistics . {" "}
          </p>
          <div className="flex items-center sm:justify-center mt-10 sm:m-0 lg:justify-start ">
            <>
              
            </>
            <>
              
            </>
          </div>
        </div>
        <div className="h-[4 relative xl:fit xl:top-16 right-0">
          
        </div>
      </div>
    </div>
  );
}
