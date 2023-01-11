import "../styles/root.css";
import "../styles/header.css";
import "../styles/index.css";
import "../styles/about.css";
import "../styles/bts.css";
import "../styles/internship.css";
import "../styles/modal.css";

import "../styles/main.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
