import { Global, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import global from "./global";

interface PropsType {
  children: React.ReactNode;
}

export const ProvideStyle = ({ children }: PropsType) => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    {children}
  </ThemeProvider>
);
