import { devSkills } from "../data";

const Skills = () => {
  return (
    <section className="">
      <div className="w-[80%]  m-auto">
        <h1>skills</h1>
        <div className="grid gap-x-[6rem] sm:gap-x-[2rem] tab:grid-cols-3 phone:grid-cols-2 sm:grid-cols-2 grid-cols-4 ">
          {devSkills.map((skills) => {
            const { id, icon, title, level } = skills;
            return (
              <div
                key={id}
                className=" w-[100%] mb-[3rem] bg-off-white shadow-xl text-center py-[1rem]  "
              >
                <span className=" text-orange text-3xl pb-[1rem] justify-center flex">
                  {icon}
                </span>
                <div>
                  <h3 className="font-bold font-garamond text-[1.3rem] sm:text-base">
                    {title}
                  </h3>
                  <small className="text-grey">{level}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
