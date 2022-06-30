import type { AppProps } from "next/app";

import Layouts from "@components/layouts/Layouts";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
