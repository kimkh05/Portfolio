import styled from "@emotion/styled";
import main from "../../assets/img/main.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div>
          <Image width={"70%"} className="main" src={main} alt="Logo" />
          <span>김경호의 포트폴리오</span>
        </div>
        <div>
          <span>홈</span>
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
  }
  a {
    color: ${({ theme }) => theme.color.black000};
  }
`;
