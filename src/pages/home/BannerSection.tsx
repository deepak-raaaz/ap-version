import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-2.png";
import Banner3 from "../../assets/images/banner-3.png";

const BannerSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto max-xl:mx-4 my-10 grid grid-cols-3 gap-8 max-sm:grid-cols-1">
      <img src={Banner1} alt="" className="rounded-lg shadow-lg" />
      <img src={Banner2} alt="" className="rounded-lg shadow-lg" />
      <img src={Banner3} alt="" className="rounded-lg shadow-lg" />
    </div>
  );
};

export default BannerSection;
