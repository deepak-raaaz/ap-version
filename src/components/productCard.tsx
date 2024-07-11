import { BiSolidStar } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductDetails from "./ProductDetails";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

type Props = {
  id: string,
    title: string,
    images: Array<string>,
    rating: number,
    availableWeight: Array<string>,
}

const ProductCard = ({title,images,availableWeight,id}:Props) => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])


  function urlEncodeText(text:string) {
    return encodeURIComponent(text);
  }

  const encodedMessage = urlEncodeText(`Hi, I am interested in your ${title}. Can you provide additional details and pricing?
  `);
  const whatsappLink = `https://wa.me/${917324907150}?text=${encodedMessage}`;

  return (
    <div className="relative group" data-aos="flip-left">
      <div className="border-slate-300 dark:border-slate-800 border-2 group-hover:border-brand-primary dark:group-hover:border-brand-darkPrimary group-hover:border-3 transition duration-300 rounded-lg pt-8 pb-10 px-4 flex flex-col items-center">
        <img
          src={images[0]}
          alt=""
          className="aspect-square object-contain"
        />
        <div className="flex space-x-1 mt-6 mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <BiSolidStar size={20} className="text-yellow-500" key={index} />
          ))}
        </div>
        <h3 className="text-lg text-center font-medium group-hover:font-bold">
          {title}
        </h3>
        <p className="text-lg font-semibold text-brand-primary dark:text-brand-darkPrimary">
          {
            availableWeight.map((weight,index) => (
              <span key={weight}>{weight}{index !== availableWeight.length - 1 ? ", " : " "}</span>
            ))
          }
        </p>
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-slate-300 dark:border-slate-600 border-2 rounded-full text-base px-8 py-5 group-hover:border-brand-primary dark:group-hover:border-brand-darkPrimary"
            >
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-screen-md max-h-[95vh] overflow-auto">
            <ProductDetails id={id}/>
          </DialogContent>
        </Dialog>
      </div>
      <div className="absolute bg-brand-primary dark:bg-brand-darkPrimary w-full h-14 items-center top-[55%] hidden group-hover:flex justify-center transition duration-300">
        <div className="flex items-center justify-center">
          <a href="tel:+917324907150">
            <FaPhone className="text-white" size={20} />
          </a>
          <div className={`bg-slate-100 w-[1px] h-8 mx-12 `}></div>
          <Link to={whatsappLink}>
            <IoLogoWhatsapp className="text-white" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
