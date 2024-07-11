import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

type Props = {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
  datePublished: string;
  tags: Array<string>;
};

const BlogCard = ({
  slug,
  title,
  thumbnail,
  description,
  datePublished,
  tags,
}: Props) => {

  const location = useLocation();

  const linkTo = location.pathname === '/' ? `/blogs/${slug}` : `/blogs/${slug}`;

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="bg-white rounded-xl shadow-lg overflow-hidden p-2 cursor-pointer dark:bg-slate-950 border dark:border-slate-800"
    >
      <img
        src={thumbnail}
        alt=""
        className="rounded-xl aspect-video mb-3 w-full"
      />
      <span className="text-sm mx-2 text-slate-500">{datePublished}</span>
      <div className="flex space-x-2 my-2 mx-1 ">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-slate-600 dark:text-slate-400">
            {tag}
          </Badge>
        ))}
      </div>
      <h2 className="text-lg font-semibold mx-2 !mt-2 line-clamp-2">{title}</h2>
      <p className="text-slate-700 mx-2 dark:text-slate-500 line-clamp-4">
        {description}
      </p>
      <div className="flex justify-end mx-2">
        <Link to={linkTo}>
          <Button
            variant="secondary"
            className="border-blue-400 border text-blue-500 bg-blue-100 my-2 dark:bg-slate-900 dark:border-blue-800 dark:hover:bg-slate-800"
          >
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
