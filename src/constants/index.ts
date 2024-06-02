import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import WaterResistantImage from "../assets/images/water-resistant.svg"
import QualityProduct from "../assets/images/quality-product.svg"
import LongLasting from "../assets/images/long-lasting.svg"
import SmoothFinish from "../assets/images/smooth-finish.svg"

export const navBarLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Products",
    route: "/products",
  },
  {
    label: "Blogs",
    route: "/blogs",
  },
  {
    label: "Services",
    route: "/services",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    url: "https://instagram.com/apversion"
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    url: "https://instagram.com/apversion"
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://instagram.com/apversion"
  },
  {
    icon: FaPinterest,
    label: "Pinterest",
    url: "https://instagram.com/apversion"
  }
]

export const featuresList = [
  {
    icon: WaterResistantImage,
    heading: "Water resistant",
    description: "Defends against moisture, safeguards your walls",
  },
  {
    icon: QualityProduct,
    heading: "Quality Product",
    description: "Crafted with precision, excellence you can trust.",
  },
  {
    icon: LongLasting,
    heading: "long-lasting",
    description: "Endures time, maintains brilliance for years",
  },
  {
    icon: SmoothFinish,
    heading: "Smooth finish",
    description: "Seamless surfaces, touch of perfection achieved",
  }
]