import { TypeAnimation } from "react-type-animation";
import { social } from "../data";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const pageVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0 },
};

const Home = () => {
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
    <section
      id="home"
      className="bg-dark-green py-[70px] relative h-[100vh] w-full"
    >
      <motion.div
        ref={ref}
        variants={pageVariant}
        initial="hidden"
        animate={control}
      >
        <div className=" py-[7rem] text-white font-opensans">
          <h2 className="text-4xl text-center md:text-2xl tab:text-3xl font-garamond">
            my name is Catherine Anokwuru{" "}
          </h2>

          <h2 className="text-3xl phone:text-2xl sm:text-xl md:px-[1rem] tab:text-2xl md:py-[1rem] text-center">
            I'm a {""}
            <TypeAnimation
              className="text-3xl phone:text-2xl sm:text-xl"
              sequence={[
                "Frontend developer",
                1500,
                "Writer",
                1500,
                "Tech enthusiast",
                1500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block", color: "#d96846" }}
              deletionSpeed={30}
              speed={30}
            />
          </h2>

          <div className=" py-[1rem] pl-[1rem] desktop:hidden text-center">
            {social.map((socials) => {
              const { id, url, icon } = socials;
              return (
                <a href={url} key={id} target="blank" className="pr-[1rem]">
                  <button className=" text-off-white text-xl  hover:text-orange">
                    {icon}
                  </button>
                </a>
              );
            })}
          </div>

          <div className="text-center pt-[1.5rem]">
            <button className="bg-orange p-3  border-off-white border-2 hover:scale-110 ">
              <a href="">Download cv</a>
            </button>
          </div>

          <div className="absolute top-[50%] left-[-12px] lg:hidden">
            {social.map((socials) => {
              const { id, url, icon } = socials;
              return (
                <a
                  href={url}
                  key={id}
                  target="blank"
                  className="block py-[0.5rem]"
                >
                  <button className=" bg-orange border-off-white border-2 rounded-[0.5rem] pl-[1rem] py-[0.5rem] pr-[0.5rem] text-off-white text-xl hover:bg-off-white hover:text-orange ">
                    {icon}
                  </button>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Home;
