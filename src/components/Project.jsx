import { projects } from "../data";
const Project = ({ project }) => {
  return (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
    <article className="project rounded-[1rem] text bg-white shadow-r px-[2rem] h-[100%]  p-[1rem] leading-xl">
      <img src={project.image} alt={project.title} className="" />
      <h5 className="font-bold font-garamond text-center text-[1.5rem] pt-[1rem] sm:text-base">
        {project.title}
      </h5>
      <p className="font-opensans text-base">{project.description}</p>
      <p className="text-grey text-small font-opensans font-bold">
        Tech Stack: {project.techStack.join(", ")}
      </p>
      <p className="text-grey text-[0.9rem] text-center font-bold">
      </p>
    </article>
        </a>
  );
};

export default Project;
