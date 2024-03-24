import { otherSkills, devSkills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="py-[3rem] w-[100vw] overflow-hidden">
      <div className="w-[80%]  m-auto">
        <h1>skills</h1>
        <div className="grid gap-x-[6rem] xl:gap-x-[2rem] phone:grid-cols-1 tab:grid-cols-2 grid-cols-2 ">
          <div className="rounded-[3rem] phone:gap-y-[2rem] bg-white shadow-r px-[2rem] gap-x-[2rem] hover:scale-[1.03] hover:cursor-pointer p-[1rem]">
            <h5 className="text-center underline underline-offset-8 decoration-orange font-garamond font-bold text-xl pb-[1rem]">
              Frontend development
            </h5>
            <div className="grid xl:grid-cols-2 phone:gap-x-[1.5rem] grid-cols-3 w-[100%] h-auto ">
              {devSkills.map((skills) => {
                const { id, icon, title, level } = skills;
                return (
                  <article
                    key={id}
                    className=" w-[100%]  py-[1rem] grid grid-cols-[10%_90%] gap-x-[0.5rem] "
                  >
                    <div className="  text-[1.1rem] flex align-middle my-[0.3rem] text-orange">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-bold font-garamond text-[1.1rem] sm:text-base">
                        {title}
                      </h3>
                      <small className="text-grey text-[0.7rem]">{level}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="rounded-[3rem] bg-white shadow-r px-[2rem] gap-x-[2rem] md:mt-[3rem] p-[1rem] hover:scale-[1.03] hover:cursor-pointer">
            <h5 className="text-center underline underline-offset-8 decoration-orange font-garamond font-bold text-xl pb-[1rem]">
              Design
            </h5>
            <div className="grid grid-cols-2 w-[100%] h-inherit phone:gap-x-[1.5rem]">
              {otherSkills.map((skills) => {
                const { id, icon, title, level } = skills;
                return (
                  <div key={id}>
                    <article className=" w-[100%]  py-[1rem] grid grid-cols-[10%_90%] gap-x-[0.5rem] ">
                      <div className="text-[1.1rem] flex align-middle my-[0.3rem] text-orange">
                        {icon}
                      </div>
                      <div>
                        <h3 className="font-bold font-garamond text-[1.1rem] sm:text-base">
                          {title}
                        </h3>
                        <small className="text-grey text-[0.7rem]">
                          {level}
                        </small>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
