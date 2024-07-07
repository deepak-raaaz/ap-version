import { useEffect } from "react";
import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-2.png";
import Banner3 from "../../assets/images/banner-3.png";
import AOS from 'aos'
import 'aos/dist/aos.css'

const BannerSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto max-xl:mx-4 my-10 grid grid-cols-3 gap-8 max-sm:grid-cols-1">
      <img data-aos="zoom-in"  src={Banner1} alt="" className="rounded-lg shadow-lg" />
      <img data-aos="zoom-in"  src={Banner2} alt="" className="rounded-lg shadow-lg" />
      <img data-aos="zoom-in"  src={Banner3} alt="" className="rounded-lg shadow-lg" />
    </div>
  );
};

export default BannerSection;
