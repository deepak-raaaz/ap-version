import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-horizontal.png";
import { FaPhone } from "react-icons/fa6";
import { socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto max-xl:mx-4 py-10 ">
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6 ">
        <div>
          <img src={Logo} alt="" className="h-10" />
          <p className="my-3">
            🔆 Smooth walls, Smooth life
            <br />⚡ High-quality wall putty and white cement.
          </p>
          <span className="flex items-center font-semibold text-slate-600">
            <FaPhone className="me-3 text-blue-500" />
            +91 7324907150
          </span>
        </div>
        <div>
          <ul className="space-y-2">
            <th>Company</th>
            <li className="text-slate-500 hover:cursor-pointer hover:text-slate-800 dark:hover:text-slate-300">
              <Link to="/about">About us</Link>
            </li>
            <li className="text-slate-500 hover:cursor-pointer hover:text-slate-800 dark:hover:text-slate-300">
              <Link to="/contact">Contact & Support</Link>
            </li>
            <li className="text-slate-500 hover:cursor-pointer hover:text-slate-800 dark:hover:text-slate-300">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="space-y-2">
            <th>Quick Links</th>
            <li className="text-slate-500 hover:cursor-pointer hover:text-slate-800 dark:hover:text-slate-300">
              <Link to="/about">Call Support</Link>
            </li>
            <li className="text-slate-500 hover:cursor-pointer hover:text-slate-800 dark:hover:text-slate-300">
              <Link to="/contact">Our Services</Link>
            </li>
            <li className="text-slate-500 hover:cursor-pointer hover:text-slate-800 dark:hover:text-slate-300">
              <Link to="/privacy-policy">Know Our Team</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Follow us on</h3>
          <div className="flex items-center my-3">
            {socialLinks.map((link, index) => (
              <div
                className="flex items-center p-2 aspect-square rounded-full border border-slate-300 dark:border-slate-600 me-2 hover:bg-blue-600 hover:text-white"
                key={link.label}
              >
                <Link to={link.url}>
                  <link.icon className="" />
                </Link>
              </div>
            ))}
          </div>
          <span className="text-slate-500">
            © 2024 AP Version Paint Industry.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
