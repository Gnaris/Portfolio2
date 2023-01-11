import React, { FunctionComponent, PropsWithChildren } from "react";

const Main: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
