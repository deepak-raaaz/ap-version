import { useEffect, useState } from "react";
import axios from "axios";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const API_BASE_URL =
  "https://script.google.com/macros/s/AKfycbznxHPd8yrHuPfljM_hzbk6UzTWRekYW9xAB9phIEDOaJUHisTaHovdH_7I4gTDZFmZIg/exec";

const Contact = () => {
  const [instagramData, setInstagramData] = useState<any[]>([]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });

    // Fetch Instagram data
    fetchInstagramData();
  }, []);

  const fetchInstagramData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?action=getInstaData`);
      setInstagramData(response.data.data);
    } catch (error) {
      // console.error("Error fetching Instagram data:", error);
      // Handle error, e.g., show error message to user
    }
  };
  return (
    <section className="flex items-center flex-col space-y-4 overflow-hidden pt-10">
      <div data-aos="zoom-in" className="flex items-center space-x-2">
        <FaInstagram size={30} className="" />
        <h1>
          <Link to="https://www.instagram.com/apversion/">
            Follow us on Instagram
          </Link>
        </h1>
      </div>
      <div className="relative flex overflow-hidden w-full">
          <div className=" animate-marquee whitespace-nowrap flex">
          {instagramData &&
          instagramData.map((post, index) => (
            <Link key={index} to={post.post_url} className="h-60 aspect-square">
              <img
                data-aos="zoom-in"
                src={post.image_url}
                alt=""
                className="h-60 aspect-square border"
              />
            </Link>
          ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
          {instagramData &&
          instagramData.map((post, index) => (
            <Link key={index} to={post.post_url} className="h-60 aspect-square">
              <img
                data-aos="zoom-in"
                src={post.image_url}
                alt=""
                className="h-60 aspect-square border"
              />
            </Link>
          ))}
          </div>
        </div>

    </section>
  );
};

export default Contact;
