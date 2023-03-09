import React, { FunctionComponent } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "next/image";

const bts: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Main>
        <div className="bts-main-container">
          <div className="bts-content">
            <h1 className="bts-title">
              <span className="bts-highlight">
                Option B : SLAM
                <br />
                (Solutions Logicielles et Applications Métiers )
              </span>
            </h1>
            <Image
              className="bts-img"
              src={"/slam.png"}
              alt="slam"
              width={500}
              height={400}
            />
            <p className="bts-info">
              <span className="bts-highlight">
                L&apos;option SLAM (Services de Logiciels et Applications Métiers)
              </span>{" "}
              dans le BTS SIO vise à former les étudiants à la conception, au
              développement, à la mise en place et à la maintenance des
              logiciels et applications métiers pour les entreprises et les
              organisations. Cela inclut l&apos;analyse des besoins des utilisateurs,
              la conception de l&apos;architecture logicielle, le développement du
              code, les tests et la mise en production des applications. Cela
              peut également inclure la maintenance corrective et évolutive des
              applications ainsi que la gestion de versions. Les étudiants
              apprennent également à utiliser les outils et les technologies les
              plus récents pour développer et mettre en place des applications,
              en s&apos;adaptant aux spécificités de chaque projet, et à respecter
              les normes de qualité. En somme l&apos;option SLAM est orienté vers le
              développement d&apos;application métier pour les entreprises et les
              organisations et leur maintenance
            </p>
          </div>
          <div className="bts-content">
            <h1 className="bts-title">
              Option A : SISR
              <br />
              (Solutions d’Infrastructures, Systèmes et Réseaux)
            </h1>
            <Image
              className="bts-img"
              src={"/sisr.png"}
              alt={"SISR"}
              width={500}
              height={400}
            />
            <p className="bts-info">
              <span className="bts-highlight">
                L&apos;option SISR (Solutions Logicielles et Applications métiers)
              </span>{" "}
              dans le BTS SIO a pour objectif de former les étudiants aux
              compétences nécessaires pour concevoir, réaliser, installer,
              maintenir et administrer des systèmes d&apos;information dans les
              entreprises et les organisations. Cela inclut la compréhension des
              besoins des utilisateurs, l&apos;analyse des fonctionnalités, la
              réalisation de spécifications techniques, la mise en place et la
              maintenance des solutions logicielles. Les étudiants apprennent
              également à utiliser les outils et les technologies les plus
              récents pour développer des solutions logicielles adaptées aux
              besoins des utilisateurs, en respectant les normes de qualité et
              les contraintes de temps et de coûts. En somme l&apos;option SISR est
              plus orienté vers les aspects de développement et de mise en place
              de solution logicielle pour des entreprises et organisations.
            </p>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default bts;
