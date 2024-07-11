import { Badge } from "@/components/ui/badge";
import { blogs } from "@/constants";
import { Link, useParams } from "react-router-dom";
import { ShareSocial } from "react-share-social";
import { IoPerson } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect } from "react";

const BlogView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <section className="max-w-screen-xl mx-auto max-xl:mx-4 pb-10 flex items-center flex-col space-y-8 pt-32 max-lg:pt-1 ">
        Blog not found
      </section>
    );
  }
  const style = {
    root: {
      //   background: "linear-gradient(45deg, #cccccc 30%, #ffffff 90%)",
      background: "transparent",
      borderRadius: 3,
      border: 0,
      //   boxShadow: "0 3px 5px 2px #000d18",
      color: "white",
    },
    copyContainer: {
      border: "1px solid #053A6D",
      background: "rgb(0,0,0,0.7)",
    },
    title: {
      color: "#64748B",
      fontStyle: "italic",
    },
  };
  return (
    <div className="max-w-screen-xl mx-auto max-xl:mx-4 pb-10 flex items-center flex-col space-y-3 pt-32 max-lg:pt-1 ">
      <div className="w-full px-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/blogs">Blogs</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{blog.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full grid grid-cols-6 gap-5">
        <article className="col-span-4 max-lg:col-span-6">
          <header className="relative">
            <img
              src={blog.thumbnail}
              alt=""
              className="aspect-video w-full rounded-2xl overflow-hidden"
            />
            <div className="px-4 py-4 bg-gradient-to-b from-transparent to-black w-full h-full absolute bottom-0 rounded-2xl flex flex-col justify-end">
              <h1 className="font-bold text-4xl text-white max-md:text-2xl max-sm:text-xl">
                {blog.title}
              </h1>
              <div className="mt-1">
                <span className="text-slate-200">
                  {blog.datePublished} • Read time : {blog.readTime}
                </span>
              </div>
            </div>
          </header>
          <div className="m-3 flex text-slate-500 space-x-2 items-center my-5">
            <IoPerson />
            <span className="text-sm font-medium capitalize">
              {blog.author}
            </span>
          </div>
            <div
              className="text-slate-600 dark:text-slate-500 mt-2"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
            <div className="flex items-center space-x-3">
              <span>Tags : </span>
              <div className="flex space-x-2 my-4 mx-1 ">
                {blog.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-slate-600 px-3 py-2 dark:text-slate-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          <div className="w-full h-[1px] bg-slate-300 mt-7 dark:bg-slate-800"></div>
          {/* social share buttons  */}
          <div className="w-full my-6">
            <ShareSocial
              title="Share and get amazing products"
              url={`https://apversion.com/blogs/${slug}`}
              socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
              style={style}
            />
          </div>
        </article>

        {/* Recent blogs list  */}
        <div className="col-span-2 max-lg:col-span-6 ">
          <div className="border-s-4 border-brand-primary  py-1 mb-2 px-3">
            <h1 className="font-semibold">Recent Blogs</h1>
          </div>
          {blogs.reverse().map((item) => (
            <Link to={`../blogs/${item.slug}`}>
              <div className="border-slate-300 dark:border-slate-800 space-x-3 grid grid-cols-3 py-3 border-b cursor-pointer">
                <img
                  src={item.thumbnail}
                  alt=""
                  className="aspect-video overflow-hidden col-span-1"
                />
                <div className="col-span-2">
                  <h2 className="font-medium line-clamp-2 text-slate-800 dark:text-slate-200">
                    {item.title}
                  </h2>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {item.datePublished}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogView;
