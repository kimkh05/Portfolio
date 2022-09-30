import styled from "@emotion/styled";
import { Card } from "./Card";
import { ProjectDummy } from "../../constance/Project";

export const Project = () => {
  return (
    <Wrapper>
      {ProjectDummy.map((e) => (
        <Card
          key={e.id}
          name={e.name}
          time={e.time}
          introduce={e.introduce}
          develop={e.develop}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5vh 0 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color};
  & > div{
    margin-bottom: 5vh;
  }
`;
