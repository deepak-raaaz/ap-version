import { featuresList } from "@/constants";

const Features = () => {
  return (
    <div className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-y-6 gap-4 ">
      {featuresList.map((item) => (
        <div className="flex space-x-6 items-center" key={item.heading}>
          <img src={item.icon} alt="" className="w-20 max-md:w-[4.5rem]"/>
          <div>
            <h3 className="uppercase text-2xl max-md:text-lg font-UpBoltersNew text-[#1D5B93]">
              {item.heading}
            </h3>
            <p className="dark:text-slate-300 font-medium text-slate-800">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
