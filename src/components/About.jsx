import image from "../assets/img2.jpg";
import { motion, useAnimation } from "framer-motion";
import { NavLink } from "react-router-dom";
import cv from '../assets/CV Kate.pdf'



const About = () => {
  return (
    <section id="about" className="  py-[3rem]">
      <div className="grid-cols-2 grid phone:grid-cols-1  gap-x-[1rem] w-[80%] m-auto overflow-hidden">
        <div className="relative pt-[3rem] z-0 before:z-[-1] before:h-[80%] before:border-orange before:absolute before:top-[0.5rem] before:left-[3rem] before:border-solid before:border-[6px] before:w-[70%] before:rounded-[0.1rem] before:max-w-[400px] phone:hidden  phone:before:hidden ">
          <img
            src={image}
            alt="Catherine Anokwuru"
            className="w-[60%] h-auto rounded-[0.1rem] text-left phone:hidden "
          />
        </div>

        <div>
          <h1>about me</h1>
          <p className=" leading-2xl ">
            Highly motivated and dedicated frontend React/JavaScript software
            developer seeking an internship role as a junior software developer.
            Passionate about learning and applying industry best practices to
            create efficient and user-friendly web applications. I am keen to
            learn and I am sharp at identifying and solving problems.
          </p>
          <div className="text-center pt-[1.5rem]">
            <button className=" p-3  border-orange border-2 hover:bg-orange hover:text-white text-orange">
              <a href={cv} target="blank">
                Download cv
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
