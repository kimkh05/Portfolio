import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLogo } from "../../../assets";

export const Header = () => {
  const [scrolly, setScrolly] = useState<number>(0);
  const [button, setButton] = useState<boolean>(false);
  const handleFollow = () => {
    setScrolly(window.pageYOffset);
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
  }, []);
  return (
    <>
      <HeaderWrapper>
        <div>
          <Image width={"70%"} className="main" src={MainLogo} alt="Logo" />
          <span>김경호의 포트폴리오</span>
        </div>
        <div>
          <span>
            <Link href="/">홈</Link>
          </span>
          <span>프로젝트</span>
          <span>
            <a href="http://github.com/kimkh05">Github</a>
          </span>
        </div>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border: 0.5px solid black;
  & > div {
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & > div > span {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  a {
    color: ${({ theme }) => theme.color.black000};
  }
`;
