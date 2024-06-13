import Heading from "@/components/heading";
import ProductCard from "@/components/productCard";

const FeaturedProduct = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 pb-16">
        <Heading text1="Featured" text2="Products" />
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-8 gap-y-10 mt-10 gap-6">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
