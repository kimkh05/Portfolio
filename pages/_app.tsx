import type { AppProps } from "next/app";
import { ProvideStyle } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideStyle>
      <Component {...pageProps} />
    </ProvideStyle>
  );
}

export default MyApp;
