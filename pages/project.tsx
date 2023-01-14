import React, { FunctionComponent } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import ProjectCard from "../components/ProjectCard";
import ProjectCardType from "../types/ProjectCardType";

const project: FunctionComponent = () => {
  const projects: ProjectCardType[] = [
    {
      img: "/netflix.png",
      language: "html css javascript php",
      title: "Phishing Netflix",
      description: "Travaux Pratique",
      code: "https://github.com/Gnaris/Netflix",
      web: "https://testp.zd.lu/",
    },
  ];

  return (
    <div>
      <Header />
      <Main>
        <div className="project-main-container">
          {projects.map((project, index) => (
            <ProjectCard
              img={project.img}
              language={project.language}
              title={project.title}
              description={project.description}
              code={project.code}
              web={project.web}
              hasWeb={project.hasWeb}
            />
          ))}
        </div>
      </Main>
    </div>
  );
};

export default project;
