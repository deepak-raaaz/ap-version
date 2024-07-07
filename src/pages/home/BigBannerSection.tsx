import { textList } from "@/constants";
import Icon1 from "../../assets/images/icon-1.png";
import Icon2 from "../../assets/images/icon-2.png";
import Icon3 from "../../assets/images/icon-3.png";
import Icon4 from "../../assets/images/icon-4.png";
import PacketImg from "../../assets/images/packet-cement-paint.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const BigBannerSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <div className="mt-10">
      <div className="max-w-screenxl mx-auto max-xl:mx-4  bg-secondary-banner-image h-[35rem] max-sm:h-[28rem] bg-no-repeat bg-center relative">
        <div className="absolute right-1/3 top-[7%] space-y-6 max-md:left-40 max-sm:left-4">
        <img data-aos="zoom-in"  src={Icon1} alt="" className="ms-20 w-32  max-sm:w-24"/>
        <img data-aos="zoom-in" src={Icon2} alt="" className=" w-32 max-sm:w-24"/>
        <img data-aos="zoom-in" src={Icon3} alt="" className=" w-32 max-sm:w-24"/>
        <img data-aos="zoom-in" src={Icon4} alt="" className="ms-20 w-32 max-sm:w-24"/>
        </div>
        <img data-aos="zoom-in" src={PacketImg} alt="" className="absolute right-[7%] max-sm:top-[25%] top-[22%] w-96 max-xl:right-0 max-lg:w-[22rem] max-sm:w-[15rem]" />
      </div>
      
      {/* moving text  */}
      <div className="border-b-2 h-16 w-full flex items-center justify-center ">
        <div className="relative flex overflow-hidden w-full">
          <div className=" animate-marquee whitespace-nowrap">
            {textList.map((text, index) => (
              <span
                className="text-base mx-4 font-medium"
                key={`key1_${index}`}
              >
                • {text}
              </span>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            {textList.map((text, index) => (
              <span
                className="text-base mx-4 font-medium"
                key={`key2_${index}`}
              >
                • {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBannerSection;
