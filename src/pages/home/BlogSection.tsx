import BlogCard from "@/components/BlogCard";
import Heading from "@/components/heading";
import { blogs } from "@/constants";


const BlogSection = () => {
  const firstThreeBlogs = blogs.slice(-3);

  return (
    <section className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 flex items-center flex-col space-y-8">
      <Heading text1="RECENT" text2="BLOGS ARTICLES" reverse={true} />
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
      {firstThreeBlogs.map((item) => (
          <BlogCard
            key={item.slug}
            title={item.title}
            slug={item.slug}
            description={item.description}
            datePublished={item.datePublished}
            id={item.id}
            thumbnail={item.thumbnail}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
