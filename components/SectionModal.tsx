import React, { FunctionComponent, PropsWithChildren } from "react";

const SectionModal: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <section className="section-modal">{children}</section>;
};

export default SectionModal;
