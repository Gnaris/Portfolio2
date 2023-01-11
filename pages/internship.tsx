import Main from "../components/Main";
import React, { FunctionComponent, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Modal from "../components/Modal";

const internship: FunctionComponent = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <Header />
      <Main>
        <div className="internship-main-container">
          <div className="internship-content">
            <div onClick={() => setOpen1(true)} className="internship-card">
              <h1 className="internship-name">Fluency</h1>
              <Image
                className="internship-img"
                src={"/fluency.jpg"}
                alt={"fluency"}
                width={350}
                height={250}
              />
            </div>
          </div>
          <div className="internship-content">
            <div onClick={() => setOpen2(true)} className="internship-card">
              <h1 className="internship-name">Dicoland</h1>
              <Image
                className="internship-img"
                src={"/dicoland.jpg"}
                alt={"fluency"}
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
      </Main>
      <Modal open={open1} setOpen={setOpen1}>
        <h1>J'aime</h1>
      </Modal>
      <Modal open={open2} setOpen={setOpen2}>
        <h1>J'aime pas</h1>
      </Modal>
    </div>
  );
};

export default internship;
