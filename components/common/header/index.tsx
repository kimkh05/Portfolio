import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { MainLogo } from "../../../assets";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <a>
          <Image width={"70%"} className="main" src={MainLogo} alt="Logo" />
        </a>
      </Link>
      <div>
        <a href="/project">프로젝트</a>
        <a href="http://github.com/kimkh05">Github</a>
        <a>프로필</a>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  border: 0.5px solid black;
  position: fixed;
  background: ${({ theme }) => theme.color.white000};
  z-index: 1;
  & > div {
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & > div > a {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  a {
    color: ${({ theme }) => theme.color.black000};
  }
`;
