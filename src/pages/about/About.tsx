import Heading from "@/components/heading";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 pb-10 flex items-center flex-col space-y-8 pt-32 max-lg:pt-1 ">
        <Heading text1="About" text2="Us" reverse={true} />
        <div data-aos="zoom-in" className="w-full  ">
          <div className="flex items-center w-full flex-col">
            <h2 className="text-2xl font-bold text-center ">
              AP Version paint Industry
            </h2>
            <p className="w-[70%] text-center mb-4 text-slate-700 dark:text-slate-400 max-md:w-[90%]">
              Welcome to <strong>AP Version Paint Industry!</strong> Established on May 8, 2023,
              we are a dynamic and growing company in the wall putty and white
              cement industry, proudly located in Patna, Bihar.
            </p>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 w-full my-2 max-md:gap-5">
            <div data-aos="zoom-in">
              <h3 className="text-xl font-semibold mb-1">Who We Are</h3>
              <p className="text-slate-700 dark:text-slate-400">
                <strong>AP Version Paint Industry</strong> was founded with a
                passion for excellence and a commitment to quality. Our journey
                began with a simple yet profound vision: to transform the
                construction and renovation experience for our customers. As a
                new entrant in the industry, we bring fresh ideas, innovative
                approaches, and a dedication to delivering superior products.
              </p>
              <p className="text-slate-700 dark:text-slate-400 mt-1">
                Our team comprises experienced professionals who are experts in
                their fields, combining their knowledge and skills to produce
                high-quality wall putty and white cement. We leverage
                state-of-the-art technology and adhere to stringent quality
                control measures to ensure that every product we offer meets the
                highest standards of durability and performance. Our
                manufacturing processes are designed to be efficient and
                environmentally friendly, reflecting our commitment to
                sustainability and responsible business practices.
              </p>
            </div>
            <div data-aos="zoom-in">
              <h3 className="text-xl font-semibold mb-1">Our Mission</h3>

              <p className="text-slate-700 dark:text-slate-400">
                At <strong>AP Version Paint Industry</strong>, our mission is to
                provide our customers with the best possible products and
                services, setting new standards in the industry. We strive to
                offer:
              </p>
              <ul className="text-slate-700 dark:text-slate-400 list-disc ms-4">
                <li>
                  <strong>Uncompromising Quality:</strong> We are dedicated to
                  producing wall putty and white cement that are unmatched in
                  quality, ensuring they meet the diverse needs of our
                  customers.
                </li>
                <li>
                  <strong>Innovative Solutions:</strong> We are constantly
                  exploring new technologies and methodologies to improve our
                  products and services, ensuring we stay ahead in the industry.
                </li>
                <li>
                  <strong>Customer Satisfaction:</strong> Our customers are at
                  the heart of everything we do. We aim to exceed their
                  expectations through exceptional service and personalized
                  solutions.
                </li>
                <li>
                  <strong>Sustainable Practices:</strong> We are committed to
                  sustainable and environmentally friendly practices in all
                  aspects of our business, from production to packaging.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 flex justify-center h-[18rem] max-sm:h-[8rem] relative bg-slate-800 mt-32 ">
        <div
          data-aos="fade-up"
          className="w-full mx-4 max-w-xl aspect-video bg-slate-300 absolute -top-32 max-sm:w-[90%] bg-about-us-banner-image dark:bg-about-us-banner-image-dark bg-contain"
        >

        </div>
      </div>
    </section>
  );
};

export default About;
