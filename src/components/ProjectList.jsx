// ProjectList.js
import {projects} from "../data/";
import Project from "./Project";

const ProjectList = () => {
  return (
    <section id="projects" className="py-[3rem] w-[100vw] overflow-hidden">
      <div>
        <h1>projects</h1>
      </div>
      <div className="project-list w-[80%] m-auto ">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
