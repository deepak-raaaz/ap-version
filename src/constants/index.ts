import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import WaterResistantImage from "../assets/images/water-resistant.svg"
import QualityProduct from "../assets/images/quality-product.svg"
import LongLasting from "../assets/images/long-lasting.svg"
import SmoothFinish from "../assets/images/smooth-finish.svg"
import ImageBlog from "../assets/images/blog-image.png"
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

export const textList = [
  "Shielding your walls from moisture, our wall putty stands tall",
  "Crafted with precision and care, our wall putty exudes quality.",
  "Enduring the test of time, our wall putty promises longevity",
  "Like a gentle brushstroke, our wall putty delivers a smooth finish."
]

export const blogs = [
  {
    id: "id_1",
    slug: "blog-1",
    title: "10 New Jewelry Trends and Style Tips for the Modern Gentleman",
    thumbnail: ImageBlog,
    description: "blog-description-1",
    author: "author_1",
    datePublished: "July 29, 2021",
    tags: ["tag1", "tag2"],
    readTime: "5 min",
    content: "blog-content-1"
  },
  {
    id: "id_2",
    slug: "blog-2",
    title: "blog-title-2",
    thumbnail: ImageBlog,
    description: "blog-description-2",
    author: "author_2",
    datePublished: "2024-07-02",
    tags: ["tag2", "tag3"],
    readTime: "6 min",
    content: "blog-content-2"
  },
  {
    id: "id_3",
    slug: "blog-3",
    title: "blog-title-3",
    thumbnail: ImageBlog,
    description: "blog-description-3",
    author: "author_3",
    datePublished: "2024-07-03",
    tags: ["tag3", "tag4"],
    readTime: "4 min",
    content: "blog-content-3"
  },
  {
    id: "id_4",
    slug: "blog-4",
    title: "blog-title-4",
    thumbnail: ImageBlog,
    description: "blog-description-4",
    author: "author_4",
    datePublished: "2024-07-04",
    tags: ["tag4", "tag5"],
    readTime: "7 min",
    content: "blog-content-4"
  },
  {
    id: "id_5",
    slug: "blog-5",
    title: "blog-title-5",
    thumbnail: ImageBlog,
    description: "blog-description-5",
    author: "author_5",
    datePublished: "2024-07-05",
    tags: ["tag5", "tag6"],
    readTime: "5 min",
    content: "blog-content-5"
  },
  {
    id: "id_6",
    slug: "blog-6",
    title: "blog-title-6",
    thumbnail: ImageBlog,
    description: "blog-description-6",
    author: "author_6",
    datePublished: "2024-07-06",
    tags: ["tag6", "tag7"],
    readTime: "8 min",
    content: "blog-content-6"
  },
  {
    id: "id_7",
    slug: "blog-7",
    title: "blog-title-7",
    thumbnail: ImageBlog,
    description: "blog-description-7",
    author: "author_7",
    datePublished: "2024-07-07",
    tags: ["tag7", "tag8"],
    readTime: "6 min",
    content: "blog-content-7"
  },
  {
    id: "id_8",
    slug: "blog-8",
    title: "blog-title-8",
    thumbnail: ImageBlog,
    description: "blog-description-8",
    author: "author_8",
    datePublished: "2024-07-08",
    tags: ["tag8", "tag9"],
    readTime: "5 min",
    content: "blog-content-8"
  },
  {
    id: "id_9",
    slug: "blog-9",
    title: "blog-title-9",
    thumbnail: ImageBlog,
    description: "blog-description-9",
    author: "author_9",
    datePublished: "2024-07-09",
    tags: ["tag9", "tag10"],
    readTime: "7 min",
    content: "blog-content-9"
  },
  {
    id: "id_10",
    slug: "blog-10",
    title: "blog-title-10",
    thumbnail: ImageBlog,
    description: "blog-description-10",
    author: "author_10",
    datePublished: "2024-07-10",
    tags: ["tag10", "tag11"],
    readTime: "4 min",
    content: "blog-content-10"
  }
];
