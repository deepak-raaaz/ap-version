import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MessageIcon from "../../assets/images/icon-envelope.png";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: '',
    date: new Date().toISOString()
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          dateTime: new Date().toISOString(),
          sheetName: 'contacts'
        }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
          message: '',
          date: new Date().toISOString()
        });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending your message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-screen-xl min-h-screen mx-auto max-xl:mx-4 pb-1 flex items-center flex-col space-y-8 pt-32 max-lg:pt-1">
      <Heading text1="Contact" text2="us" reverse={true} />
      <div className="py-4 max-md:grid-cols-1 grid grid-cols-2 gap-12 px-3 bg-no-repeat">
        <div
          data-aos="zoom-in-right"
          className="text-slate-900 dark:text-slate-300"
        >
          <h2 className="font-bold text-2xl uppercase">Get in touch with us</h2>
          <p className="mt-4">
            Have a question or need assistance? Reach out to us using the
            contact form below. Fill in your details along with your message,
            and our team will get back to you as soon as possible.
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
        <div
          data-aos="zoom-in-left"
          className="bg-slate-300 dark:bg-slate-900 px-12 py-10 rounded-lg relative max-md:px-8 max-md:py-8"
        >
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border-2 border-brand-primary my-4 text-base py-6"
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border-2 border-brand-primary my-4 text-base py-6"
              required
            />
            <Input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              className="border-2 border-brand-primary my-4 text-base py-6"
              required
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here."
              className="border-2 border-brand-primary my-4 text-base"
              required
            />
            <Button type="submit" className="w-full bg-brand-primary py-6 dark:text-white dark:hover:bg-brand-primary" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
          <img
            src={MessageIcon}
            alt=""
            className="absolute right-4 top-6 rotate-45 w-12 max-md:w-8 max-md:right-2 "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
