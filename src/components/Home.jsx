import { TypeAnimation } from "react-type-animation";
import { social } from "../data";
import home from "../assets/home.jpg";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contact";
import ProjectList from "./ProjectList";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className=" py-[70px]  px-[2%] relative phone:h-[100vh] h-[100vh] w-full"
      >
        <div className="grid-cols-[40%_60%] grid phone:grid-cols-1 phone:gap gap-x-[1rem] w-[90%] m-auto overflow-hidden">
          <div>
            <div className=" py-[10rem] phone:pb-[3rem] phone:pt-[5rem] text-dark-green font-opensans">
              <h2 className="text-[2.6rem] text-center phone:text-2xl tab:text-3xl font-garamond w-[100%]">
                I'm Catherine Anokwuru.
              </h2>

              <h2 className="text-2xl phone:text-xl sm:text-xl phone:px-[1rem] tab:text-2xl md:py-[1rem] text-center">
                A {""}
                <TypeAnimation
                  className="text-[2rem] phone:text-xl "
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
                  style={{ display: "inline-block", color: "#f58220" }}
                  deletionSpeed={30}
                  speed={30}
                />
              </h2>

              {/* <div className=" py-[1rem] pl-[1rem] text-center">
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
              </div> */}

              <div className=" py-[2rem] text-center phone:py-[1rem]">
                {social.map((socials) => {
                  const { id, url, icon } = socials;
                  return (
                    <a
                      href={url}
                      key={id}
                      target="blank"
                      className=" py-[0.5rem] pr-[0.3rem] "
                    >
                      <button className=" bg-orange border-off-white border-2 rounded-[0.5rem] pl-[1rem] py-[0.5rem] pr-[0.5rem] text-off-white text-xl hover:bg-off-white hover:text-orange ">
                        {icon}
                      </button>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-[110%] phone:w-[100%] m-auto">
            <img src={home} alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      {/* <Resume /> */}
      <ProjectList />
      <Contact />
    </>
  );
};
export default Home;
