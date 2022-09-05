import Link from "next/link";

export default function Like() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-10 flex-col    text-left px-2   ">
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
            Roadmap
          </h1>
          <br/>
          <p className="max-w-lg ">
           Q4 2021 
            - (ALL ACCOMPLISHED)
            <br/>
            Q1 2022
            - (ALL ACCOMPLISHED)
            <br/>
            Q2 2022
            - (ALL ACCOMPLISHED)
            <br/><br/>
            Q3 2022<br/>
            - Rebranding ✅
            <br/>
            - Staking and MNGO airdrops ✅
            <br/>
            - Panda Syndicates relaunch ✅
            <br/>
            - Hashmingos relaunch ✅
            <br/>
            - Lady Mingos claim ✅
            <br/>
            - $MNGO Wheel reconstruction into $MNGO Bust or Miss
            <br/>
            - Burn 2000 Hashmingos (1600 currently) ✅
            <br/>
            - Hashmingos Burn to Enter Raffles ✅
            <br/>
            - $MNGO Discord Marketplace ✅
            <br/>
            - $MNGO Saucer Swap Listing ✅
            <br/>
            - Launch Mutant Pandas {" "}✅
            <br/>
            Q4 2021 
          </p>

        </div>
        
          <img src="map.jpg"  width='600'  />
       
      </div>
    </div>
  );
}
