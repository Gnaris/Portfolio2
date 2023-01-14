import React, { FunctionComponent } from "react";
import Image from "next/image";
import InternshipCardType from "../types/InternshipCardType";

const InternshipCard: FunctionComponent<InternshipCardType> = ({
  title,
  img,
  date,
  description,
  setOpen,
}) => {
  return (
    <div
      onClick={() => {
        setOpen(true);
      }}
      className="internship-content"
    >
      <h1 className="internship-name">{title}</h1>
      <div className="internship-information">
        <Image
          className="internship-img"
          src={img}
          alt={img}
          width={350}
          height={300}
        />
        <div className="internship-description">
          <time className="internship-time">{date}</time>
          <p className="internship-paragraphe">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
