import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-8 flex-col  text-left px-2   ">
        <h1 className="text-5xl sm:text-[80px] font-bold text-yellow-300">Welcome to the Brotherhood Academy</h1>
          <img src="cc.jpg" className="w-[100%] h-[100%]" /> 
          
          <br/>
          <h1 className="text-4xl sm:text-[30px] center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kings arent born...they are made</h1>
          <br/>
          <div className="flex space-x-2 justify-center">
          <button type="button" className="inline-block px-6 py-2.5 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg focus:bg-yellow-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Learn More</button>
        </div>
        </div>
        <div className="h-[4 relative xl:fit xl:top-16 right-0">
          
        </div>
      </div>
    </div>
  );
}
