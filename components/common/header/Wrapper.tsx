import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Header } from ".";

interface PropsType {
  children: ReactNode;
}

export const Wrapper = ({ children }: PropsType) => {
  return (
    <>
      <HeaderWrapper>
        <Header />
        {children}
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div``;
