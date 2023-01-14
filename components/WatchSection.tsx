import React, { FunctionComponent, PropsWithChildren } from "react";

const WatchSection: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <section className="watch-section">{children}</section>;
};

export default WatchSection;
