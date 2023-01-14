import React, { FunctionComponent } from "react";
import Image from "next/image";
import ProjectCardType from "../types/ProjectCardType";

const ProjectCard: FunctionComponent<ProjectCardType> = ({
  img,
  language,
  title,
  description,
  code,
  web,
  hasWeb = true,
}) => {
  return (
    <div className="project-card">
      <Image
        className="project-img"
        src={img}
        alt={img}
        width={300}
        height={250}
      />
      <div className="project-content">
        <div className="project-information">
          <h2 className="project-language">{language}</h2>
          <h1 className="project-title">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="project-link-container">
          <button>
            <a className="project-link" href={code} target="_blank">
              Code source
            </a>
          </button>
          {hasWeb && (
            <button>
              <a className="project-link" href={web} target="_blank">
                Site
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
