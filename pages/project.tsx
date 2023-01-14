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
    },
    {
      img: "/crud.jpg",
      language: "php",
      title: "Système de gestion de tournoi",
      description: "Travaux Pratique",
      code: "https://github.com/Gnaris/Tournoi",
    },
    {
      img: "/gsb.jpg",
      language: "php",
      title: "Gestion de comptable et visiteur",
      description: "Travaux Pratique",
      code: "https://github.com/Gnaris/ApGSB",
    },
    {
      img: "/fluency.jpg",
      language: "javascript",
      title: "Front Office",
      description: "Stage",
      code: "https://github.com/Gnaris/Fluency",
    },
    {
      img: "/dicoland.jpg",
      language: "php",
      title: "API Rest",
      description: "Stage",
      code: "https://github.com/Gnaris/-DicolandApi",
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
            />
          ))}
        </div>
      </Main>
    </div>
  );
};

export default project;
