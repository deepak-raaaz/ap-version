import Heading from "@/components/heading";
import ProductCard from "@/components/productCard";

const FeaturedProduct = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 pb-16">
        <Heading text1="Featured" text2="Products" />
        <div className="grid grid-cols-4 mt-10 gap-6">
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
