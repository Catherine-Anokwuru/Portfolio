import image from "../assets/img2.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const pictureVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: -50 },
};
const textVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: 50 },
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section id="about" className=" py-[3rem]">
      <div className="grid-cols-2 grid lg:grid-cols-1  gap-x-[3rem] w-[70%] m-auto overflow-hidden">
        <motion.div
          ref={ref}
          variants={pictureVariant}
          initial="hidden"
          animate={control}
        >
          <div className="relative pt-[3rem] z-0 before:z-[-1] before:h-[80%] before:border-orange before:absolute before:top-[0.5rem] before:left-1 before:border-solid before:border-[3px] before:w-[80%] before:rounded-[5rem] before:max-w-[400px] lg:pb-[1rem] lg:before:left-[20%] lg:before:top-[1rem]">
            <img
              src={image}
              alt="Catherine Anokwuru"
              className="w-[80%] h-[100%] rounded-[5rem] m-auto"
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={textVariant}
          initial="hidden"
          animate={control}
        >
          <div>
            <h1>about me</h1>
            <p className=" leading-2xl pt-[1rem]">
              Adapting to various work cultures, identifying and resolving
              bottlenecks and prioritizing have been striking features of my
              work styles. In addition to the above, I strongly believe in
              learning and sharing my knowledge with my colleagues "knowledge
              parted is knowledge gained" is my motto. I am keen to learn and I
              am sharp at identifying and solving problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
