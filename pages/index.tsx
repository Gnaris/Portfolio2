import React, { FunctionComponent } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import Main from "../components/Main";

const index: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Main>
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">
              Bienvenue sur mon{" "}
              <span className="portfolio-word">Portfolio</span>
            </h1>
            <p className="home-paragraphe">
              Vous retrouverez dans mon portfolio toutes les informations concernant ma formation en BTS SIO SLAM
            </p>
            <Link className="home-btn" href={"/CV.pdf"}>
              Cliquez ici pour voir mon CV
            </Link>
          </div>
          <div className="home-img">
            <Image src={"/human.png"} alt={"Slime"} width={500} height={400} />
          </div>
        </div>
      </Main>
    </div>
  );
};

export default index;
