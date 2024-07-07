import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MessageIcon from "../../assets/images/icon-envelope.png";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto max-xl:mx-4 my-10 py-14 max-md:grid-cols-1 max-md:px-8 max-md:py-8 pb-16 bg-brand-primary bg-contact-image grid grid-cols-2 gap-12 px-16 bg-no-repeat">
      <div data-aos="zoom-in-right" className="text-white">
        <h2 className="font-bold text-2xl uppercase">Get in touch</h2>
        <p className="mt-4">
          Have a question or need assistance? Reach out to us using the contact
          form below. Fill in your details along with your message, and our team
          will get back to you as soon as possible.
        </p>
        <p className="mt-4">
          If you prefer to reach us through other means, you can also use the
          following options:
        </p>
        <ul className="list-disc ms-4 mt-3">
          <li>Phone: +91 7324907150</li>
          <li>Email: info@apversion.com</li>
          <li>Address: Patna, Bihar- 800001</li>
        </ul>
      </div>
      <div data-aos="zoom-in-left" className="bg-white dark:bg-slate-900 px-12 py-10 rounded-lg relative max-md:px-8 max-md:py-8">
        <form action="">
          <Input
            type="name"
            placeholder="Your Name"
            className="border-2 border-brand-primary my-4 text-base py-6"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="border-2 border-brand-primary my-4 text-base py-6"
          />
          <Input
            type="number"
            placeholder="Your Mobile Number"
            className="border-2 border-brand-primary my-4 text-base py-6"
          />
          <Textarea
            placeholder="Type your message here."
            className="border-2 border-brand-primary my-4 text-base"
          />
          <Button className="w-full bg-brand-primary py-6 dark:text-white dark:hover:bg-brand-primary">Submit</Button>
        </form>
        <img
          src={MessageIcon}
          alt=""
          className="absolute right-4 top-6 rotate-45 w-12 max-md:w-8 max-md:right-2 "
        />
      </div>
    </div>
  );
};

export default ContactForm;
