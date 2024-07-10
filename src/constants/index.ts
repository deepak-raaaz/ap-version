import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import WaterResistantImage from "../assets/images/water-resistant.svg";
import QualityProduct from "../assets/images/quality-product.svg";
import LongLasting from "../assets/images/long-lasting.svg";
import SmoothFinish from "../assets/images/smooth-finish.svg";
import ImageBlog from "../assets/images/blog-image.png";

import ProductImage1 from "../assets/images/ap-version-wall-putty.png";
import ProductImage2 from "../assets/images/ap-version-white-cement.png";
import ProductImage3 from "../assets/images/ap-version-waterproof-cement-paint.png";

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
    url: "https://instagram.com/apversion",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    url: "https://instagram.com/apversion",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://instagram.com/apversion",
  },
  {
    icon: FaPinterest,
    label: "Pinterest",
    url: "https://instagram.com/apversion",
  },
];

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
  },
];

export const textList = [
  "Shielding your walls from moisture, our wall putty stands tall",
  "Crafted with precision and care, our wall putty exudes quality.",
  "Enduring the test of time, our wall putty promises longevity",
  "Like a gentle brushstroke, our wall putty delivers a smooth finish.",
];

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
    content: "blog-content-1",
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
    content: "blog-content-2",
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
    content: "blog-content-3",
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
    content: "blog-content-4",
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
    content: "blog-content-5",
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
    content: "blog-content-6",
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
    content: "blog-content-7",
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
    content: "blog-content-8",
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
    content: "blog-content-9",
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
    content: "blog-content-10",
  },
];

export const products = [
  {
    id: "1-product",
    title: "Premium Plus Birla Gold Wall Putty",
    images: [ProductImage1],
    rating: 4.5,
    availableWeight: ["40 kg"],
    header: "Premium Plus",
    productDescription: `
      <p><strong>Description:</strong> Premium Plus Birla Gold Wall Putty is a high-quality, white cement-based wall putty designed to provide a smooth and durable finish for your walls. It is suitable for both interior and exterior applications, ensuring your walls are perfectly prepared for painting.</p>
    `,
    moreDetails: `<ul class="space-y-2">
    <li><strong>Features:</strong>
      <ul>
        <li>Superior Adhesion: Ensures a strong bond with the substrate.</li>
        <li>Smooth Finish: Provides an even and smooth surface ready for painting.</li>
        <li>Moisture Resistant: Helps prevent peeling and flaking of paint.</li>
        <li>Crack Resistant: Offers excellent durability and flexibility.</li>
        <li>Easy Application: Can be applied with ease using a putty knife or trowel.</li>
      </ul>
    </li>
    <li><strong>Benefits:</strong>
      <ul>
        <li>Enhances the lifespan and appearance of your paint.</li>
        <li>Provides a flawless base, reducing paint consumption.</li>
        <li>Improves the overall aesthetic appeal of walls.</li>
      </ul>
    </li>
    <li><strong>Technical Specifications:</strong>
      <ul>
        <li>Coverage: Approximately 14-16 sq. ft./kg/2 coats (varies based on surface conditions).</li>
        <li>Drying Time: Surface dry in 30 minutes, ready for the next coat in 6-8 hours.</li>
        <li>Shelf Life: 12 months from the date of manufacture when stored in a cool, dry place.</li>
      </ul>
    </li>
    <li><strong>Usage Instructions:</strong>
      <ul>
        <li>Clean the surface to remove loose particles, dust, grease, and other contaminants.</li>
        <li>Apply a thin layer of wall putty using a putty knife or trowel.</li>
        <li>Allow it to dry for 6-8 hours before applying the second coat.</li>
        <li>Sand the surface gently for a smooth finish before painting.</li>
      </ul>
    </li>
  </ul>`,
    keyfeatures: `<strong>Key Features:</strong>
  <ul class="list-disc ms-6 mt-1 dark:text-slate-500">
    <li>Superior Adhesion</li>
    <li>Smooth Finish</li>
    <li>Moisture Resistant</li>
    <li>Crack Resistant</li>
    <li>Easy Application</li>
  </ul>
`,
  },
  {
    id: "2-product",
    title: "Premium Plus Birla Gold Decorative White Cement",
    images: [ProductImage2],
    rating: 4.5,
    availableWeight: ["25 kg", "50 kg"],
    header: "Premium Plus",
    productDescription: `
      <p><strong>Description:</strong> Premium Plus Birla Gold Decorative White Cement is a versatile and high-brightness white cement ideal for decorative applications. It can be used to create intricate designs, mosaics, and artistic elements, adding elegance and beauty to any structure.</p>
    `,
    moreDetails: `<ul class="space-y-2">
    <li><strong>Features:</strong>
      <ul>
        <li>High Brightness and Whiteness: Ensures a brilliant and attractive finish.</li>
        <li>Strong and Durable: Provides a robust and long-lasting finish.</li>
        <li>Excellent Workability: Easy to mix and apply, with a smooth consistency.</li>
        <li>Weather Resistant: Resists weathering and maintains its appearance over time.</li>
        <li>Multi-Purpose: Suitable for a variety of decorative and architectural uses.</li>
      </ul>
    </li>
    <li><strong>Benefits:</strong>
      <ul>
        <li>Enhances the aesthetic appeal of buildings and structures.</li>
        <li>Allows for creative and customized designs.</li>
        <li>Provides a durable and weather-resistant finish.</li>
      </ul>
    </li>
    <li><strong>Technical Specifications:</strong>
      <ul>
        <li>Coverage: Varies based on the application and design complexity.</li>
        <li>Setting Time: Initial setting in 30 minutes, final setting in 600 minutes.</li>
        <li>Shelf Life: 6 months from the date of manufacture when stored in a cool, dry place.</li>
      </ul>
    </li>
    <li><strong>Usage Instructions:</strong>
      <ul>
        <li>Mix the white cement with the appropriate amount of water to achieve a workable consistency.</li>
        <li>Apply the mixture using suitable tools, depending on the decorative design.</li>
        <li>Allow it to set and cure properly to achieve the desired strength and finish.</li>
        <li>Use protective coatings or sealants as needed for added durability and longevity.</li>
      </ul>
    </li>
  </ul>`,
  keyfeatures: `<strong>Key Features:</strong>
  <ul class="list-disc ms-6 mt-1 dark:text-slate-500">
  <li>High Brightness and Whiteness</li>
  <li>Strong and Durable</li>
  <li>Excellent Workability</li>
  <li>Weather Resistant</li>
  <li>Multi-Purpose</li>
  </ul>
`,
  },
  {
    id: "3-product",
    title: "Birla Gold Waterproof Cement Paint",
    images: [ProductImage3],
    rating: 4.5,
    availableWeight: ["40 kg", "20 kg"],
    header: "Birla Gold",
    productDescription: `
      <p><strong>Description:</strong> Birla Gold Waterproof Cement Paint is a specially formulated paint designed to provide superior waterproofing and an attractive finish to exterior walls. It protects against harsh weather conditions and enhances the aesthetic appeal of buildings.</p>
      
    `,
    moreDetails: `<ul class="space-y-2">
    <li><strong>Features:</strong>
      <ul>
        <li>Excellent Waterproofing: Prevents water penetration and protects walls.</li>
        <li>UV Resistant: Offers protection against harmful UV rays.</li>
        <li>Durable Finish: Long-lasting and resistant to wear and tear.</li>
        <li>Variety of Colors: Available in a range of vibrant and long-lasting colors.</li>
        <li>Easy to Apply: Can be applied using a brush, roller, or spray.</li>
      </ul>
    </li>
    <li><strong>Benefits:</strong>
      <ul>
        <li>Protects buildings from rain, humidity, and other weather conditions.</li>
        <li>Maintains the beauty and integrity of exterior walls.</li>
        <li>Reduces maintenance costs by providing long-term protection.</li>
      </ul>
    </li>
    <li><strong>Technical Specifications:</strong>
      <ul>
        <li>Coverage: Approximately 50-60 sq. ft./kg/2 coats (varies based on surface conditions and application method).</li>
        <li>Drying Time: Surface dry in 30 minutes, recoatable after 4-6 hours.</li>
        <li>Shelf Life: 12 months from the date of manufacture when stored in a cool, dry place.</li>
      </ul>
    </li>
    <li><strong>Usage Instructions:</strong>
      <ul>
        <li>Clean the surface to remove loose particles, dust, and any previous coatings.</li>
        <li>Mix the paint thoroughly before application.</li>
        <li>Apply the first coat evenly using a brush, roller, or spray.</li>
        <li>Allow it to dry for 4-6 hours before applying the second coat.</li>
        <li>For best results, ensure proper curing and protection from water during the drying process.</li>
      </ul>
    </li>
  </ul>`,
  keyfeatures: `<strong>Key Features:</strong>
  <ul class="list-disc ms-6 mt-1 dark:text-slate-500">
  <li>Excellent Waterproofing</li>
  <li>UV Resistant</li>
  <li>Durable Finish</li>
  <li>Variety of Colors</li>
  <li>Easy to Apply</li>
  </ul>
`,
  },
];
