import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { MainLogo, GithubLogo } from "../../../assets";

export const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Image width={"50%"} src={MainLogo} alt="Logo" />
      </div>
      <div>
        <div>
          <span>김경호의 포트폴리오</span>
          <span>ⓒ Portfolio_2022.</span>
          <span>전화번호 010-3312-5024</span>
          <span>Email: nestjs05@gmail.com</span>
        </div>
        <Link href={"https://github.com/kimkh05/Portfolio"}>
          <Image src={GithubLogo} alt="깃허브 사진" />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  background-color: ${({ theme }) => theme.color.main};
  color: #fdfdfd;
  display: flex;
  align-items: center;
  & > div {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    font-size: 16px;
  }
  & > div > div {
    display: flex;
    flex-direction: column;
  }
`;
