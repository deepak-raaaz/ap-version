import { FaInstagram } from "react-icons/fa";
import Post from "../../assets/images/apversion_post.jpg";

const InstagramPost = () => {
  return (
    <section className="flex items-center flex-col space-y-4 overflow-hidden py-10">
      <div className="flex items-center space-x-2">
        <FaInstagram size={30} className="" />
        <h1>Follow us on Instagram</h1>
      </div>
      <div className="flex">
        <img src={Post} alt="" className="h-60 aspect-square border" />
        <img src={Post} alt="" className="h-60 aspect-square border" />
        <img src={Post} alt="" className="h-60 aspect-square border" />
        <img src={Post} alt="" className="h-60 aspect-square border" />
        <img src={Post} alt="" className="h-60 aspect-square border" />
        <img src={Post} alt="" className="h-60 aspect-square border" />
        <img src={Post} alt="" className="h-60 aspect-square border" />
      </div>
    </section>
  );
};

export default InstagramPost;
