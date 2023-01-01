import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="text-gradient font-poppins font-semibold ss:text-[48px] text-[32px] ss:leading-[100.8px] leading-[75px] w-full">
        Why Join <br className="sm:block hidden" /> the Program.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       - Learn manhood principles
       <br/>
       - Learn entrepreneurship etiquette
       <br/>
       - Learn universal laws of success
       <br/>
       - Learn leadership roles
       <br/>
       - Lifetime relationship with mentors, brothers, sisters and entrepreneurs
       <br/>
       - Support
       <br/>
       - Uplift
       <br/>
       - Networking
       <br/>
       - Academic achievement
       <br/>
       - Life achievement
       <br/>
       - Societal maturation
       <br/>
       - Personal growth
       <br/>
       - Maximizing your opportunities
      </p>

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
