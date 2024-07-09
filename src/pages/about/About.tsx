import Heading from "@/components/heading";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto max-xl:mx-4 pb-10 flex items-center flex-col space-y-8 pt-32 max-lg:pt-1 ">
        <Heading text1="About" text2="Us" reverse={true} />
        <div data-aos="zoom-in" className="w-full ">
          <h2 className="text-2xl font-bold text-center">
            AP Version paint Industry
          </h2>
          <div   className="grid grid-cols-2 max-md:grid-cols-1 gap-10 w-full my-2">
            <div data-aos="zoom-in">
              <h3 className="text-xl font-semibold">heading 3</h3>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                laborum tempore nostrum, ratione quod soluta fugit quo dolor
                nemo nisi vero accusamus, nesciunt enim suscipit, culpa modi
                sunt! Ab qui aut fugit laboriosam, tempora non tempore veritatis
                iste nobis reiciendis architecto, est aliquid! Illo, temporibus
                ea cumque consequuntur explicabo sit? Ad quo cumque magnam animi
                quas impedit fuga numquam corrupti commodi, exercitationem
                consequatur in unde, ut modi alias maiores rerum aspernatur,
                facere nulla. Saepe ipsa at iusto temporibus natus dolores, quo
                culpa alias a sequi in provident repellat nisi modi voluptate
                rem libero aliquam ratione aut quibusdam! Asperiores, repellat
                expedita!
              </p>
            </div>
            <div data-aos="zoom-in">
              <h3 className="text-xl font-semibold">heading 3</h3>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                laborum tempore nostrum, ratione quod soluta fugit quo dolor
                nemo nisi vero accusamus, nesciunt enim suscipit, culpa modi
                sunt! Ab qui aut fugit laboriosam, tempora non tempore veritatis
                iste nobis reiciendis architecto, est aliquid! Illo, temporibus
                ea cumque consequuntur explicabo sit? Ad quo cumque magnam animi
                quas impedit fuga numquam corrupti commodi, exercitationem
                consequatur in unde, ut modi alias maiores rerum aspernatur,
                facere nulla. Saepe ipsa at iusto temporibus natus dolores, quo
                culpa alias a sequi in provident repellat nisi modi voluptate
                rem libero aliquam ratione aut quibusdam! Asperiores, repellat
                expedita!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 flex justify-center h-[18rem] relative bg-slate-800 mt-32">
        <div  data-aos="fade-up" className="w-full mx-4 max-w-xl aspect-video bg-slate-300 absolute -top-32"></div>
      </div>
    </section>
  );
};

export default About;
