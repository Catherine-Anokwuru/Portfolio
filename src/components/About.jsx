import image from "../assets/img2.jpg";
import { motion, useAnimation } from "framer-motion";
import { NavLink } from "react-router-dom";

const pictureVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, x: -50 },
};
const textVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, x: 50 },
};

const About = () => {
  return (
    <section id="about" className="phone:py-[1rem] py-[3rem]">
      <div className="grid-cols-2 grid phone:grid-cols-1  gap-x-[1rem] w-[80%] m-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative pt-[3rem] z-0 before:z-[-1] before:h-[80%] before:border-orange before:absolute before:top-[0.5rem] before:left-[3rem] before:border-solid before:border-[6px] before:w-[70%] before:rounded-[0.1rem] before:max-w-[400px] lg:pb-[1rem] lg:before:left-[20%] lg:before:top-[1rem] phone:before:hidden ">
            <img
              src={image}
              alt="Catherine Anokwuru"
              className="w-[60%] h-auto rounded-[0.1rem] text-left phone:hidden "
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        >
          <div>
            <h1>about me</h1>
            <p className=" leading-2xl ">
              Adapting to various work cultures, identifying and resolving
              bottlenecks and prioritizing have been striking features of my
              work styles. In addition to the above, I strongly believe in
              learning and sharing my knowledge with my colleagues "knowledge
              parted is knowledge gained" is my motto. I am keen to learn and I
              am sharp at identifying and solving problems.
            </p>
            <div className="text-center pt-[1.5rem]">
              <button className=" p-3  border-orange border-2 hover:bg-orange hover:text-white text-orange">
                <a href="">Download cv</a>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
