import Heading from "@/components/heading";
import ProductCard from "@/components/productCard";
import { products } from "@/constants";

const Products = () => {
  return (
    <section className="max-w-screen-xl mx-auto max-xl:mx-4 pb-10 flex items-center flex-col space-y-8 pt-32 max-lg:pt-1 ">
      <Heading text1="Our" text2="Products" reverse={true} />
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-8 gap-y-10 mt-10 gap-6">
        {products.map((item) => (
          <ProductCard
          id={item.id}
            key={item.title}
            title={item.title}
            availableWeight={item.availableWeight}
            images={item.images}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
