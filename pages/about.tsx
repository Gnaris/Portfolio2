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
            Depuis mon plus jeune âge, j’ai toujours été attiré par
            l’informatique et les nouvelles technologies. C’est tout
            naturellement que je me suis tourné vers ces études surtout au
            niveau du développement web.
          </p>
          <p className="about-main-paragraphe">
            Personne motivée, dynamique et autodidacte, j'ai commencé à coder
            lorsque j'étais encore en terminal, en fillière bac pro commerce.
            C’est tout naturellement que je me suis orienté dans cette voie,
            pratiquant des études similaires et des recherches par passion
            personnelle.
          </p>
        </div>
      </Main>
    </div>
  );
};

export default about;
