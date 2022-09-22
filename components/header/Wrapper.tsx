import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Header } from "./Header";

interface PropsType {
  children: ReactNode;
}

export const Wrapper = ({ children }: PropsType) => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div``;
