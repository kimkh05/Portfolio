import styled from "@emotion/styled";

interface PropsType {
  name: string;
  time: string;
  introduce: string;
  develop: string[];
}

export const Card = ({ name, time, introduce, develop }: PropsType) => {
  return (
    <CardWrapper>
      <TitleWrapper>
        <span>{name}</span>
        <span>{time}</span>
      </TitleWrapper>
      <TagWrapper>
        <span>사용 기술</span>
        {develop.map((v, i) => (
          <Tag key={i}>
            <span>{v}</span>
          </Tag>
        ))}
      </TagWrapper>
      <span>{introduce}</span>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 80%;
  height: 10vh;
  background-color: ${({ theme }) => theme.color.white001};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 0 20px 0 20px;
  & > span:nth-child(1) {
    font-size: 24px;
  }
`;

const Tag = styled.div`
  width: max-content;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.sidecolor001};
  color: ${({ theme }) => theme.color.white001};
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    color: ${({ theme }) => theme.color.black000};
    background-color: ${({ theme }) => theme.color.white000};
    border: 1px solid black;
  }
`;

const TagWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > span:nth-child(1) {
    font-weight: bold;
    font-size: 24px;
  }
  & > span:nth-child(2) {
    color: ${({ theme }) => theme.color.gray001};
    font-size: 10px;
  }
`;
