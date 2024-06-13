import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

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
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 grid grid-cols-2 gap-16">
        <div className="">
          <span className="">Premium Plus</span>
          <h3>Birla Gold Waterproof Cement Paint</h3>
          <p>
            Renowned for its unparalleled quality and durability, Birla Gold
            Waterproof Cement Paint is the ultimate solution for protecting and
            enhancing your walls. Crafted with precision and expertise, this
            paint offers a seamless finish that withstands the test of time,
            leaving your walls with a radiant glow for years to come.
          </p>
          <h4>Key Features:</h4>
          <ul className="list-disc ms-4 mt-3">
            <li>Waterproof Formula</li>
            <li>Superior Quality</li>
            <li>Exceptional Durability</li>
          </ul>
        </div>

        <div className="ps-10">
          <div className="bg-slate-200 w-full aspect-square rounded-full flex justify-center items-center">
            <div className="mx-16 w-full aspect-square rounded-full bg-circle-image bg-no-repeat object-bottom  bg-contain">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="w-full aspect-square flex items-center justify-center">
                      gehdghdb
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
