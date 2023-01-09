import Link from "next/link";
import React, { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header>
      <div className="header-container">
        <Link className="portfolio-title" href={"/"}>
          Boris Chen
        </Link>
        <nav>
          <Link href={"about"}>À Propos</Link>
          <Link href={"bts"}>BTS SIO</Link>
          <Link href={"internship"}>Stage</Link>
          <Link href={"project"}>Projets</Link>
          <Link href={"watch"}>Veille</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
