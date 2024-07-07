import ProductImage from "../assets/images/product-1.png";
import { BiSolidStar } from "react-icons/bi";
import { Button } from "./ui/button";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";

const ProductDetails = () => {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-2 max-md:col-span-5">
        <div className="p-8 w-full flex justify-center items-center"  >
          <img src={ProductImage} alt="" className="max-md:max-w-[300px] w-full"/>
        </div>
        <div className="grid grid-cols-4 gap-1 max-md:grid-cols-6 max-sm:grid-cols-4">
          <div className="bg-gray-200 dark:bg-slate-900 p-2 rounded-sm cursor-pointer hover:scale-110 shadow-lg">
            <img src={ProductImage} alt="" />
          </div>
        </div>
      </div>

      <div className="col-span-3 max-md:col-span-5">
        <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-2 font-semibold rounded-lg text-sm">
          Premium Plus
        </span>
        <h2 className="font-bold text-xl text-slate-900 dark:text-slate-300 mt-3">
          Birla Gold Waterproof Cement Paint
        </h2>
        <p className="text-lg font-semibold ">
          20 kg
        </p>
        <div className="flex space-x-1 mt-2 mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <BiSolidStar size={20} className="text-yellow-500" key={index} />
          ))}
        </div>
        <p className="text-slate-600 dark:text-slate-500">
          Renowned for its unparalleled quality and durability, Birla Gold
          Waterproof Cement Paint is the ultimate solution for protecting and
          enhancing your walls. Crafted with precision and expertise, this paint
          offers a seamless finish that withstands the test of time, leaving
          your walls with a radiant glow for years to come.
        </p>
        <h4 className="text-lg font-medium mt-3 dark:text-slate-500">
          Key Features:
        </h4>
        <ul className="list-disc ms-4 mt-1 dark:text-slate-500">
          <li>Waterproof Formula</li>
          <li>Superior Quality</li>
          <li>Exceptional Durability</li>
        </ul>
        <div className="h-[1px] w-full bg-slate-300 my-4 dark:bg-slate-800"></div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-slate-400 dark:border-slate-700 "
          >
            <FaPhone className="h-4 w-4 text-slate-400 dark:text-slate-500" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-slate-400 dark:border-slate-700"
          >
            <IoLogoWhatsapp className="h-4 w-4 text-slate-500" />
          </Button>
          <Button
            variant="outline"
            className="border-slate-400 py-0 dark:border-slate-700 dark:text-slate-500"
          >
            Contact Seller
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
