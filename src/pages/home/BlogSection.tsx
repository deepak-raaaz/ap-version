import BlogCard from "@/components/BlogCard";
import Heading from "@/components/heading";


const BlogSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 flex items-center flex-col space-y-8">
      <Heading text1="RECENT" text2="BLOGS ARTICLES" reverse={true} />
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </section>
  );
};

export default BlogSection;
