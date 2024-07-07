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
import PacketImage from "../../assets/images/packet-cement-paint.png"
const ProductIntroSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 grid grid-cols-2 gap-16 max-lg:gap-4 max-900px:grid-cols-1 ">
        <div className="max-900px:order-2 max-900px:mt-6">
          <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-2 font-semibold rounded-lg">
            Premium Plus
          </span>
          <h3 className="text-2xl font-bold mt-5 mb-2 text-slate-900 dark:text-slate-400">
            Birla Gold Waterproof Cement Paint
          </h3>
          <p className="text-slate-600 dark:text-slate-500">
            Renowned for its unparalleled quality and durability, Birla Gold
            Waterproof Cement Paint is the ultimate solution for protecting and
            enhancing your walls. Crafted with precision and expertise, this
            paint offers a seamless finish that withstands the test of time,
            leaving your walls with a radiant glow for years to come. {current} {count}
          </p>
          <h4 className="text-lg font-medium mt-3 dark:text-slate-500">Key Features:</h4>
          <ul className="list-disc ms-4 mt-1 dark:text-slate-500">
            <li>Waterproof Formula</li>
            <li>Superior Quality</li>
            <li>Exceptional Durability</li>
          </ul>
          <div className="h-[1px] w-full bg-slate-300 my-4 dark:bg-slate-800"></div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="border-slate-400 dark:border-slate-700 ">
              <FaPhone className="h-4 w-4 text-slate-400 dark:text-slate-500" />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-400 dark:border-slate-700">
              <IoLogoWhatsapp className="h-4 w-4 text-slate-500" />
            </Button>
            <Button variant="outline" className="border-slate-400 py-0 dark:border-slate-700 dark:text-slate-500">
              View Details
            </Button>
          </div>
        </div>

        <div className="ps-10 max-lg:ps-0 max-900px:mx-10 max-md:mx-3 max-sm:mx-0 max-900px:order-1">
          <div className="bg-slate-200 dark:bg-slate-900 w-full aspect-square rounded-full flex justify-center items-center">
            <div className="mx-16 w-full aspect-square rounded-full bg-circle-image bg-no-repeat object-bottom  bg-contain max-420px:w-[85%]">
              <Carousel setApi={setApi} >
                <CarouselContent >
                  <CarouselItem>
                    <div className="w-full aspect-square flex items-center justify-center rounded-full overflow-hidden">
                      <img src={PacketImage} alt="" className="max-xl:w-[20vw] max-lg:w-[20vw] mt-5 max-900px:w-[47vw] max-md:w-[46vw] max-420px:w-[50vw]  w-[300px]"/>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full aspect-square flex items-center justify-center">
                      gehdghdghdgfhdfgh
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full aspect-square flex items-center justify-center">
                      gehdghdghdgfhdfgh
                    </div>
                  </CarouselItem>
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
