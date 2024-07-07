import Heading from "@/components/heading";
import { FaPhone } from "react-icons/fa6";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <section className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 flex items-center flex-col space-y-8">
      <Heading text1="Contact" text2="us" reverse={true} />
      <div className="grid grid-cols-3 gap-10 w-full max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-3">
        <div data-aos="zoom-in" className="bg-blue-100 dark:bg-slate-950 px-8 py-8 w-full flex items-center space-x-5 cursor-pointer">
          <div className="bg-brand-primary p-4 rounded-full text-white ">
            <FaPhone size={30} />
          </div>
          <span className="font-bold">
            Phone : <br />
            +91 9839847294
          </span>
        </div>

        <div data-aos="zoom-in" className="bg-blue-100 dark:bg-slate-950 px-8 py-8 w-full flex items-center space-x-5 cursor-pointer">
          <div className="bg-brand-primary p-4 rounded-full text-white ">
            <BsEnvelopeAtFill size={30} />
          </div>
          <span className="font-bold">
            Email : <br />
            info@version.com
          </span>
        </div>

        <div data-aos="zoom-in" className="bg-blue-100 dark:bg-slate-950 px-8 py-8 w-full flex items-center space-x-5 cursor-pointer">
          <div className="bg-brand-primary p-4 rounded-full text-white ">
            <FaLocationDot size={30} />
          </div>
          <span className="font-bold">
            Address : <br />
            Patna, Bihar- 800001
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
