import Heading from "@/components/heading"
import Partner1Img from "../../assets/images/partner1.png";
import Partner2Img from "../../assets/images/partner2.png";
import Partner3Img from "../../assets/images/partner3.png";
import Partner4Img from "../../assets/images/partner4.png";
import Partner5Img from "../../assets/images/partner5.png";
import Partner6Img from "../../assets/images/partner6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const OurPartnerSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="bg-gray-200 overflow-hidden dark:bg-slate-800">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 flex items-center flex-col space-y-8 ">
      <Heading text1="Our" text2="Dealers" reverse={true}/>
      <div className="flex space-x-10">
        <img data-aos="zoom-in" src={Partner1Img} alt="" />
        <img data-aos="zoom-in" src={Partner2Img} alt="" />
        <img data-aos="zoom-in" src={Partner3Img} alt="" />
        <img data-aos="zoom-in" src={Partner4Img} alt="" />
        <img data-aos="zoom-in" src={Partner5Img} alt="" />
        <img data-aos="zoom-in" src={Partner6Img} alt="" />
      </div>
      </div>
    </section>
  )
}

export default OurPartnerSection