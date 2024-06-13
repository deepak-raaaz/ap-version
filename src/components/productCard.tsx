import ProductImg1 from "../assets/images/product-1.png";
import { BiSolidStar } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


const ProductCard = () => {
  return (
    <div className="relative group">
      <div className="border-slate-300 dark:border-slate-600 border-2 group-hover:border-brand-primary dark:group-hover:border-brand-darkPrimary group-hover:border-3 transition duration-300 rounded-lg pt-8 pb-10 px-4 flex flex-col items-center">
        <img
          src={ProductImg1}
          alt=""
          className="aspect-square object-contain"
        />
        <div className="flex space-x-1 mt-6 mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <BiSolidStar size={20} className="text-yellow-500" key={index} />
          ))}
        </div>
        <h3 className="text-lg text-center font-medium group-hover:font-bold">
          Birla Gold Waterproof Cement Paint
        </h3>
        <p className="text-lg font-semibold text-brand-primary dark:text-brand-darkPrimary">20 kg</p>
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
        <Button
          variant="outline"
          className="border-slate-300 dark:border-slate-600 border-2 rounded-full text-base px-8 py-5 group-hover:border-brand-primary dark:group-hover:border-brand-darkPrimary"
        >
          View Details
        </Button>
      </div>
      <div className="absolute bg-brand-primary dark:bg-brand-darkPrimary w-full h-14 items-center top-[55%] hidden group-hover:flex justify-center transition duration-300">
        <div className="flex items-center justify-center">
          <Link to="/">
            <FaPhone className="text-white" size={20} />
          </Link>
          <div className={`bg-slate-100 w-[1px] h-8 mx-12 `}></div>
          <Link to="/">
            <IoLogoWhatsapp className="text-white" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
