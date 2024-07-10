import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "@/constants";
import { Link } from "react-router-dom";

const ProductIntroSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  // const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  function urlEncodeText(text: string) {
    return encodeURIComponent(text);
  }

  const encodedMessage =
    urlEncodeText(`Hi, I am interested in your ${products[(current-1 < 0 ? 0 : current-1)].title}. Can you provide additional details and pricing?
  `);
  const sellerContactMessage = urlEncodeText(
    "Hi, I would like to get in touch regarding your products. Could you please provide more information?"
  );

  const whatsappLink = `https://wa.me/${917324907150}?text=${encodedMessage}`;

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 grid grid-cols-2 gap-16 max-lg:gap-4 max-900px:grid-cols-1 ">
        <div data-aos="zoom-in" className="max-900px:order-2 max-900px:mt-6">
          <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-2 font-semibold rounded-lg">
            { products[(current-1 < 0 ? 0 : current-1)].header}
          </span>
          <h3 className="text-2xl font-bold mt-5 mb-2 text-slate-900 dark:text-slate-400">
          { products[(current-1 < 0 ? 0 : current-1)].title}
          </h3>
          <div
          className="text-slate-600 dark:text-slate-500"
          dangerouslySetInnerHTML={{ __html: products[(current-1 < 0 ? 0 : current-1)].productDescription }}
        ></div>
        <div
          className="text-slate-600 dark:text-slate-500 mt-2"
          dangerouslySetInnerHTML={{ __html: products[(current-1 < 0 ? 0 : current-1)].keyfeatures }}
        ></div>
          
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

        <div
          data-aos="zoom-in"
          className="ps-10 max-lg:ps-0 max-900px:mx-10 max-md:mx-3 max-sm:mx-0 max-900px:order-1"
        >
          <div className="bg-slate-200 dark:bg-slate-900 w-full aspect-square rounded-full flex justify-center items-center">
            <div className="mx-16 w-full aspect-square rounded-full bg-circle-image bg-no-repeat object-bottom  bg-contain max-420px:w-[85%]">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {products.map((item) => (
                    <CarouselItem>
                      <div className="w-full aspect-square flex items-center justify-center rounded-full overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt=""
                          className="max-xl:w-[12.8vw] max-lg:w-[14vw] mt-5 max-900px:w-[30vw] max-md:w-[30vw] max-560px:w-[26vw] max-420px:w-[22vw]  w-[180px]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIntroSection;
