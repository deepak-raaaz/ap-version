import BannerSection from "./BannerSection"
import FeaturedProduct from "./FeaturedProduct"
import Features from "./Features"
import { HomeCarousel } from "./HomeCarousel"
import ContactForm from "./ContactForm"
import BigBannerSection from "./BigBannerSection"
import ProductIntroSection from "./ProductIntroSection"
// import BlogSection from "./BlogSection"
// import ContactSection from "./ContactSection"
// import InstagramPost from "./InstagramPost"
// import OurPartnerSection from "./OurPartnerSection"

const Home = () => {
  return (
    <div className=" bg-slate-100 dark:bg-slate-900">
      <HomeCarousel/>
      <Features/>
      <FeaturedProduct/>
      <ContactForm/>
      <BannerSection/>
      <BigBannerSection/>
      <ProductIntroSection/>
      {/* <OurPartnerSection/>
      <BlogSection/>
      <ContactSection/>
      <InstagramPost/> */}
    </div>
  )
}

export default Home