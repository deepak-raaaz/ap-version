
type Props = {
    text1?: string;
    text2?: string;
    reverse?:boolean;
};

const Heading = ({text1, text2,reverse}:Props) => {
  return (
    <div className={`space-y-1 flex flex-col ${reverse ? "items-center" : ""}`}>
      <h2 className={`uppercase font-bold font-poppins text-2xl ${reverse ? "text-brand-primary" : "text-slate-900"}`}>
        <span className={`${reverse ? "text-slate-900" : "text-brand-primary"}`}>{text1}</span> {text2}
      </h2>
      <svg
        width="42"
        height="6"
        viewBox="0 0 42 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="6" fill="black" />
        <rect x="9" width="6" height="6" fill="black" fillOpacity="0.8" />
        <rect x="18" width="6" height="6" fill="black" fillOpacity="0.6" />
        <rect x="27" width="6" height="6" fill="black" fillOpacity="0.4" />
        <rect x="36" width="6" height="6" fill="black" fillOpacity="0.2" />
      </svg>
    </div>
  );
};

export default Heading;
