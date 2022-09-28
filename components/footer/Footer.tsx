import styled from "@emotion/styled";
import main from "../../assets/img/main.svg";
import Image from "next/image";
import github from "../../assets/img/github.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Image width={"50%"} src={main} alt="Logo" />
      </div>
      <div>
        <div>
          <span>나의 포트폴리오</span>
          <span>ⓒ Portfolio </span>
          <span>전화번호 010-3312-5024</span>
          <span>Email: nestjs05@gmail.com</span>
        </div>
        <Link href={"https://github.com/kimkh05/Portfolio"}>
          <Image src={github} alt="깃허브 사진" />
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
