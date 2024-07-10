import { BiSolidStar } from "react-icons/bi";
import { Button } from "./ui/button";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useState } from "react";
import { products } from "@/constants";
import { Link } from "react-router-dom";

type Props = {
  id: string;
};

const ProductDetails = ({ id }: Props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="">product not found</div>;
  }

  function urlEncodeText(text: string) {
    return encodeURIComponent(text);
  }

  const encodedMessage =
    urlEncodeText(`Hi, I am interested in your ${product.title}. Can you provide additional details and pricing?
  `);
  const sellerContactMessage = urlEncodeText(
    "Hi, I would like to get in touch regarding your products. Could you please provide more information?"
  );

  const whatsappLink = `https://wa.me/${917324907150}?text=${encodedMessage}`;

  return (
    <div className="grid grid-cols-5 gap-8 ">
      <div className="col-span-2 max-md:col-span-5">
        <div className="p-8 w-full flex justify-center items-center">
          <img
            src={product.images[0]}
            alt=""
            className="max-md:max-w-[300px] w-full"
          />
        </div>
        <div className="grid grid-cols-4 gap-1 max-md:grid-cols-6 max-sm:grid-cols-4">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-slate-900 p-2 rounded-sm cursor-pointer hover:scale-110 shadow-lg"
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-3 max-md:col-span-5">
        <span className="bg-gradient-to-r capitalize from-blue-600 to-red-600 text-white px-3 py-2 font-semibold rounded-lg text-sm">
          {product.header}
        </span>
        <h2 className="font-bold text-xl text-slate-900 dark:text-slate-300 mt-3">
          {product.title}
        </h2>
        <p className="text-base font-semibold ">
          Available Weight :&nbsp;
          {product.availableWeight.map((weight, index) => (
            <span key={weight}>
              {weight}
              {index !== product.availableWeight.length - 1 ? ", " : " "}
            </span>
          ))}
        </p>
        <div className="flex space-x-1 mt-2 mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <BiSolidStar size={20} className="text-yellow-500" key={index} />
          ))}
        </div>
        <div
          className="text-slate-600 dark:text-slate-500"
          dangerouslySetInnerHTML={{ __html: product.productDescription }}
        ></div>
        {!isReadMore && (
          <div
            className="text-slate-600 dark:text-slate-500"
            dangerouslySetInnerHTML={{ __html: product.moreDetails }}
          ></div>
        )}
        <span onClick={toggleReadMore} className="text-blue-700 cursor-pointer">
          {isReadMore ? "read more..." : " show less"}
        </span>

        <div className="h-[1px] w-full bg-slate-300 my-4 dark:bg-slate-800"></div>
        <div className="flex gap-2">
          <a href="tel:+917324907150">
            <Button
              variant="outline"
              size="icon"
              className="border-slate-400 dark:border-slate-700 "
            >
              <FaPhone className="h-4 w-4 text-slate-400 dark:text-slate-500" />
            </Button>
          </a>
          <Link to={whatsappLink}>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-400 dark:border-slate-700"
            >
              <IoLogoWhatsapp className="h-4 w-4 text-slate-500" />
            </Button>
          </Link>
          <Link
            to={`https://wa.me/${917324907150}?text=${sellerContactMessage}`}
          >
            <Button
              variant="outline"
              className="border-slate-400 py-0 dark:border-slate-700 dark:text-slate-500"
            >
              Contact Seller
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
