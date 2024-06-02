import FeaturedProduct from "./FeaturedProduct"
import Features from "./Features"
import { HomeCarousel } from "./HomeCarousel"

const Home = () => {
  return (
    <div className=" bg-slate-100 dark:bg-slate-900">
      <HomeCarousel/>
      <Features/>
      <FeaturedProduct/>
    </div>
  )
}

export default Home