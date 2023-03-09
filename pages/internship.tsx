import Main from "../components/Main";
import React, { FunctionComponent, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Modal from "../components/Modal";
import InternshipCardType from "../types/InternshipCardType";
import InternshipCard from "../components/InternshipCard";
import SectionModal from "../components/SectionModal";

const Internship: FunctionComponent = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const internships: InternshipCardType[] = [
    {
      title: "Fluency",
      img: "/fluency.jpg",
      date: "30/05/2022 au 22/07/2022",
      description:
        "Fluency est une start-up de commerce électronique créée en 2021 par Jonathan Ma. Elle se concentre sur la vente de sneakers en ligne. Au départ, l&apos;équipe de Fluency a choisi d&apos;utiliser Shopify pour créer leur boutique en ligne. Shopify est une plateforme populaire pour les petites entreprises qui souhaitent démarrer rapidement avec le commerce électronique. Il offre une variété d&apos;outils et de fonctionnalités pour aider les entreprises à créer et gérer facilement leur boutique en ligne, y compris la gestion des inventaires, des commandes et des paiements. Cependant, après un certain temps, l&apos;équipe de Fluency a décidé de concevoir leur site en code natif. Cela signifie qu&apos;ils veulent que leur site soit concç en code pur à partir de zéro, plutôt que d&apos;utiliser une plateforme tierce. Cela leur donne un plus grand contrôle sur leur site et leur permet de l&apos;optimiser pour une meilleure expérience utilisateur. C&apos;est alors que mon stage va se résumer sur la création du site web de l&apos;entreprise.",
      setOpen: setOpen1,
    },
    {
      title: "Dicoland",
      img: "/dicoland.jpg",
      date: "28/11/2022 au 20/01/2023",
      description:
        "Dicoland, une librairie qui vend tous types de livres depuis 2001. Leur site web a été créé en 2002 et a été modifié par différentes personnes au fil des ans pour ajouter des fonctionnalités. Malheureusement, ces modifications ont entraîné des problèmes sur le site, qui commence à devenir vieux et obsolète par rapport aux standards actuels. La base de données est devenue désorganisée, ce qui rend difficile la gestion des inventaires et des commandes. C&apos;est pour cette raison que nous avons été contactés pour intervenir et résoudre ces problèmes. Notre objectif est de moderniser le site web de Dicoland, en utilisant les dernières technologies et en mettant en place des pratiques de développement efficaces pour garantir une expérience utilisateur optimale. Nous allons également restructurer la base de données pour la rendre plus organisée et plus facile à gérer.",
      setOpen: setOpen2,
    },
  ];

  return (
    <div>
      <Header />
      <Main>
        <div className="internship-main-container">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              title={internship.title}
              img={internship.img}
              date={internship.date}
              description={internship.description}
              setOpen={internship.setOpen}
            />
          ))}
        </div>
      </Main>
      <Modal open={open1} setOpen={setOpen1}>
        <div className="internship-modal-container">
          <div className="internship-modal-header">
            <h1 className="internship-modal-name">Fluency</h1>
            <Image
              src={"/fluency.jpg"}
              alt={"fluency"}
              width={450}
              height={300}
            />
          </div>
          <SectionModal>
            <div>
              <h1 className="section-modal-title">La mission</h1>
              <p className="section-modal-text">
                La mission confiée était la création d&apos;une boutique e-commerce
                pour l&apos;entreprise.
              </p>
            </div>
            <div>
              <h1 className="section-modal-title">-Le cahier des charges</h1>
              <ul className="section-modal-list-container">
                <li>
                  L&apos;application doit être en SPA (Single Page Application)
                </li>
                <li>
                  La barre de navigation doit être un composant et export à
                  chaque page
                </li>
                <li>
                  Utilisez le hook useParams afin d&apos;acheminer l&apos;utilisateur vers
                  le produit correspondant
                </li>
                <li>
                  Proposer et améliorer UI/UX (user interface/user experience)
                </li>
                <li>
                  En cas de problème, utilisez les bibliothèques déjà existant
                </li>
                <li>L&apos;application doit être adaptée sur toutes les formats</li>
              </ul>
            </div>
          </SectionModal>
          <SectionModal>
            <h1 className="section-modal-title">L&apos;environnement</h1>
            <p className="section-modal-text">
              Au lieu d&apos;utiliser un outil de gestion de projet standard tel que
              Trello, j&apos;ai opté pour l&apos;utilisation de Discord, car cela
              convenait mieux à notre petite équipe en termes de rôles et de
              responsabilités. De plus, Discord est actuellement très populaire
              pour les communications vocales et écrites et est plus facilement
              utilisable par tous les membres de l&apos;équipe par rapport à Trello.
            </p>
          </SectionModal>
          <SectionModal>
            <h1 className="section-modal-title">Les difficultés/solutions</h1>
            <p className="section-modal-text">
              En tant que seul développeur de l&apos;équipe, j&apos;ai rencontré de
              nombreux défis en essayant de réaliser certaines tâches, que ce
              soit en utilisant Javascript ou CSS. Pour y parvenir, j&apos;ai dû
              effectuer une grande quantité de recherches sur des plateformes
              telles que Youtube, Stack Overflow, Discord et dans la
              documentation.
            </p>
          </SectionModal>
        </div>
      </Modal>
      <Modal open={open2} setOpen={setOpen2}>
        <div className="internship-modal-container">
          <div className="internship-modal-header">
            <h1 className="internship-modal-name">Dicoland</h1>
            <Image
              src={"/dicoland.jpg"}
              alt={"dicoland"}
              width={500}
              height={200}
            />
          </div>
          <SectionModal>
            <div>
              <h1 className="section-modal-title">La mission</h1>
              <p className="section-modal-text">
                La mission principale était d&apos;améliorer le plus possible leur
                site, la base de données et corriger les problèmes.
              </p>
            </div>
            <div>
              <h1 className="section-modal-title">-Le cahier des charges</h1>
              <ul className="section-modal-list-container">
                <li>
                  -Corriger les problèmes qui sont dans la base de données
                  (rassembler les tables qui font les mêmes choses dans une
                  seule)
                </li>
                <li>-Refaire le visuel du site</li>
                <li>-Rajouter l&apos;option Mondial Relay sur le site</li>
              </ul>
            </div>
          </SectionModal>
          <SectionModal>
            <h1 className="section-modal-title">Le déroulement</h1>
            <p className="section-modal-text">
              Nous sommes trois stagiaires dans l&apos;entreprise, et nous avons
              convenu que l&apos;un de mes camarades se chargera de la conception
              visuelle du site, tandis que mon autre camarade et moi-même nous
              occuperons de la partie back-office pour implémenter le système de
              Mondial Relay. Au cours de la première semaine, nous commencerons
              par créer un prototype du site afin de le présenter et de le faire
              valider par la patronne de l&apos;entreprise, puis chacun de nous
              poursuivra sa tâche respective.
            </p>
          </SectionModal>
          <SectionModal>
            <h1 className="section-modal-title">
              ajout fonctionnalité mondial relay
            </h1>
            <p className="section-modal-text">
              Compte tenu du refus de l&apos;entreprise de modifier le code source du
              site et de leur proposition de développer les fonctionnalités
              séparément pour une implémentation ultérieure par leur personnel,
              j&apos;ai décidé de créer moi-même une API en utilisant les
              bibliothèques Slim4 et Guzzle. J&apos;ai conçu un système
              d&apos;authentification JWT pour l&apos;utilisateur afin de pouvoir
              implémenter ultérieurement la fonctionnalité Mondial Relay, car il
              est nécessaire qu&apos;un utilisateur soit connecté en tant
              qu&apos;administrateur pour envoyer des colis, par exemple.
            </p>
          </SectionModal>
          <SectionModal>
            <h1 className="section-modal-title">Les difficultés/solutions</h1>
            <p className="section-modal-text">
              En tant que groupe de trois stagiaires et avec une patronne qui
              n&apos;a pas de compétences en informatique, il est très difficile pour
              nous de savoir par où commencer, étant donné qu&apos;il n&apos;y a pas
              d&apos;informaticien pour nous guider. Nous avons dû abandonner la base
              de données, car toutes les clés étrangères ont été supprimées par
              quelqu&apos;un d&apos;autre et il n&apos;y a pas de modèle conceptuel de données
              (MCD), ce qui rend difficile pour nous de refaire la base de
              données. Il est également compliqué pour nous de mettre en place
              Mondial Relay, car selon leur service web, il nous faut consulter
              leur cahier des charges, ce qui dépasse notre niveau actuel.
            </p>
          </SectionModal>
        </div>
      </Modal>
    </div>
  );
};

export default Internship;
