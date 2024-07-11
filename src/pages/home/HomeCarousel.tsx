import Autoplay from "embla-carousel-autoplay"
import SliderImg from "../../assets/images/Slider-1.png"
import SliderImg2 from "../../assets/images/slider-2.png"
import SliderImg3 from "../../assets/images/slider-3.png"
import SliderImg4 from "../../assets/images/slider-4.png"

import SliderImg2Dark from "../../assets/images/slider-2-dark.png"
import SliderImg3Dark from "../../assets/images/slider-3-dark.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@/components/theme-provider";


export function HomeCarousel() {
  const {theme} = useTheme();
  const sliderImage = theme === 'light' ? [SliderImg2,SliderImg3,SliderImg,SliderImg4] : [SliderImg2Dark,SliderImg3Dark,SliderImg,SliderImg4]
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
        {sliderImage.map((image, index) => (
          <CarouselItem key={index} className="">
            <div className=" w-full" >
              <img src={image} alt="" className="w-full" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
