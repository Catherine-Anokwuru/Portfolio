import { education, experience, personalInfo, resumeIcon } from "../data";
import { GrCertificate } from "react-icons/gr";
import { GiDiploma } from "react-icons/gi";
const Resume = () => {
  return (
    <section id="resume" className="leading-2xl py-[3rem]">
      <div>
        <h1>resume</h1>

        <div className="grid gap-10 grid-cols-[1fr_4fr] w-[80%] m-auto ">
          {/* ICONS TAB */}
          <div className="my-auto ">
            {resumeIcon.map((info) => {
              const { icon, title } = info;
              return (
                <div key={title} className="gap-2 grid grid-cols-[1fr_8fr]">
                  <div>
                    <button className="bg-dark-green  text-off-white h-[5rem] px-[0.5rem]">
                      {icon}
                    </button>
                  </div>
                  <div>
                    <h3 className="mt-[1.5rem] font-semibold w-[7rem] hover:bg-dark-green hover:text-off-white hover:">
                      {title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TAB INFO */}
          <div className="shadow-r px-[3rem] py-[2rem]">
            {education.map((info, index) => {
              const { degree, date, school, cgpa, id } = info;
              return (
                <>
                  <div
                    key={id}
                    className="grid grid-cols-[10%_90%] pb-[2rem]"
                  >
                    <div>
                      <GiDiploma className="inline-block" />
                    </div>
                    <div>
                      <div className="flex flex-row justify-between gap-16">
                        <h4 className=" font-semibold font-garamond text-xl">
                          {degree}
                        </h4>
                        <p className="text-small whitespace-nowrap bg-orange h-10 rounded-[1rem] text-center px-[0.8rem] text-off-white pt-[0.2rem]">
                          {date}
                        </p>
                      </div>
                      <h3 className="text-nude">{school}</h3>
                      <p className="text-grey">{cgpa}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
