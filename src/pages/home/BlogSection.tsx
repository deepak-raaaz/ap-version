import Heading from "@/components/heading";

const BlogSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 flex items-center flex-col space-y-8">
      <Heading text1="RECENT" text2="BLOGS ARTICLES" reverse={true} />
    </section>
  );
};

export default BlogSection;
