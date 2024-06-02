import Autoplay from "embla-carousel-autoplay"
import SliderImg from "../../assets/images/Slider-1.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function HomeCarousel() {
  return (
    <Carousel
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
