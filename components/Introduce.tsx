import styled from "@emotion/styled";
import Image from "next/image";
import introduce from "../assets/img/introduce.png";

export const Introduce = () => {
  return (
    <Wrapper>
      <div>
        <TextWrapper>
          <span className="title">
            무언가를 하나 시작하면
            <br />
            끝까지 노력하는 사람
          </span>
          <span>
            누구보다 열심히 일하고 누구보다 열심히 찾아보는 학생입니다. <br />
            프론트엔드 개발자로 여러가지 기술을 사용하여 프로젝트를 진행하고
            있습니다. <br />
            멤버들과 같이 생각하여 사용자의 관점으로 편리함을 제공하기 위해
            노력하고 있습니다.
          </span>
        </TextWrapper>
        <Image src={introduce} alt="introduce" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 70%;
    display: flex;
    justify-content: space-around;
  }
  .title {
    font-weight: bold;
    font-size: 48px;
    color: ${({ theme }) => theme.color.black000};
  }
`;

const TextWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span {
    width: 100%;
    word-break: break-all;
    font-size: 20px;
    color: ${({ theme }) => theme.color.gray001};
  }
`;
