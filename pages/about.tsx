import React, { FunctionComponent } from "react";
import Main from "../components/Main";
import Header from "../components/Header";

const about: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Main>
        <div className="about-main-container">
          <h1 className="about-main-title">À propos de moi</h1>
          <p className="about-main-paragraphe">
            Je m’appelle <span className="user-word">Boris Chen</span>, je suis
            actuellement en BTS SIO (Services Informatiques aux Organisations)
            option SLAM (Solutions logicielles et applications métiers) au
            <br />
            Lycée Turgot.
          </p>
          <p className="about-main-paragraphe">
            Depuis mon enfance, j'ai toujours été passionné par l'informatique
            et les technologies. C'est pour cette raison que j'ai choisi de
            poursuivre mes études dans ce domaine, en particulier dans le
            développement web.
          </p>
          <p className="about-main-paragraphe">
            En tant que personne motivée, dynamique et autodidacte, j'ai débuté
            ma pratique en développement en terminale, dans la filière Bac Pro
            commerce. C'est grâce à cette passion personnelle que j'ai décidé de
            changer de fillière et de poursuivre dans cette voie.
          </p>
        </div>
      </Main>
    </div>
  );
};

export default about;
