import Autoplay from "embla-carousel-autoplay"
import SliderImg from "../../assets/images/Slider-1.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export function HomeCarousel() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <Carousel
    data-aos="zoom-out"
    plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}
      className="w-full aspect-slider"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className=" w-full" >
              <img src={SliderImg} alt="" className="w-full" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
