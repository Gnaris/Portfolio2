import React, { FunctionComponent } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import WatchSection from "../components/WatchSection";
import Image from "next/image";

const watch: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Main>
        <div className="watch-main-container">
          <WatchSection>
            <h1 className="watch-section-title">
              C'est quoi une veille technologique ?
            </h1>
            <Image
              className="watch-section-img"
              src={"/veille.png"}
              alt={"veille technologique"}
              width={500}
              height={500}
            />
            <p className="watch-section-description">
              Une veille technologique est un processus continu de collecte,
              d'analyse et de diffusion d'informations sur les tendances, les
              innovations et les évolutions des technologies qui ont un impact
              sur une entreprise ou un domaine spécifique. Elle permet de rester
              informé des dernières avancées et de prendre des décisions
              éclairées pour adapter les activités de l'entreprise aux
              changements du marché.
            </p>
          </WatchSection>
          <WatchSection>
            <h1 className="watch-section-title">Dans quels buts ?</h1>
            <p className="watch-section-description">
              La veille technologique a principalement pour but de permettre à
              une entreprise ou à un individu de:
            </p>
            <ul className="watch-section-list-container">
              <li>
                Identifier les tendances et les innovations dans son domaine
                d'activité pour anticiper les évolutions et les changements à
                venir.
              </li>
              <li>
                Détecter les opportunités d'affaires et les menaces
                potentielles.
              </li>
              <li>
                Améliorer la compétitivité de l'entreprise en adoptant les
                dernières technologies et en innovant.
              </li>
              <li>
                Suivre les évolutions réglementaires et les normes pour s'y
                conformer.
              </li>
            </ul>
          </WatchSection>
          <WatchSection>
            <h1 className="watch-section-title">React Js</h1>
            <p className="watch-section-description">
              Le sujet de ma veille technologique se portera sur ReactJs. Cette
              partie de framework est très réputé aujourd'hui par la majorité
              des développeurs.
            </p>
          </WatchSection>
          <WatchSection>
            <h1 className="watch-section-title">C'est quoi ReactJs ?</h1>
            <p className="watch-section-description">
              React JS est un cadre JavaScript open-source utilisé pour
              construire des interfaces utilisateur. Il a été développé et est
              maintenu par Facebook. React permet aux développeurs de créer des
              composants UI réutilisables qui peuvent être facilement intégrés
              dans d'autres applications. Il utilise un concept de "virtual DOM"
              qui permet de rendre les mises à jour de l'interface plus
              efficaces en ne ré-affichant que les parties de l'interface qui
              ont réellement changé. React est devenu populaire pour construire
              des applications web et des applications mobiles à travers React
              Native.
            </p>
          </WatchSection>
          <WatchSection>
            <h1 className="watch-section-title">
              Les sites populaires qui utilisent ReactJs
            </h1>
            <p className="watch-section-description">
              Facebook, Instagram, Netflix, Airbnb, Dropbox, Uber, Twitter,
              Microsoft, Alibaba etc...
            </p>
          </WatchSection>
          <WatchSection>
            <h1 className="watch-section-title">
              Si c'est si populaire, React n'a jamais cherché de solution ?
            </h1>
            <p className="watch-section-description">
              Que ce soit chez React ou dans n'importe quelle application front
              end, les attaques les plus courantes est le XSS (Cross-Site
              Scription) et l'injection SQL.
            </p>
          </WatchSection>
          <WatchSection>
            <h1 className="watch-section-title">
              Quelles sont les solutions ou les recommandations pour éviter ces
              attaques
            </h1>
            <p className="watch-section-description">
              ReactJS est une bibliothèque JavaScript populaire qui est souvent
              utilisée par les developpeurs. Il est devenu si populaire qu'il
              est souvent considéré comme un framework. Malheureusement, sa
              popularité ne protège pas automatiquement les applications React
              contre les attaques de sécurité telles que les injections et XSS.
              Pour se protéger contre ces types d'attaques, il est important
              d'utiliser des bibliothèques de sécurité telles que DOMPurify,
              Json Web Token, PassportJS, etc. Ces bibliothèques sont conçues
              pour aider les développeurs à protéger les applications contre les
              vulnérabilités courantes. <br />
            </p>
            <ul className="watch-section-list-container">
              <li>
                <a href="https://fr.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks">
                  JSX empêche les attaques d’injection (Documentation React).
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/questions/33644499/what-does-it-mean-when-they-say-react-is-xss-protected">
                  JSX empêche les attaques d'injection mais pas sur toutes les
                  façon.
                </a>
              </li>
              <li>
                <a href="https://relevant.software/blog/react-js-security-guide/">
                  Tout les informations sur la sécurité d'une application React.
                </a>
              </li>
            </ul>
          </WatchSection>
        </div>
      </Main>
    </div>
  );
};

export default watch;
