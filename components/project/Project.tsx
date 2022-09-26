import styled from "@emotion/styled";
import { Card } from "./Card";
import { ProjectDummy } from "../../constance/Project";
import theme from "../../styles/theme";

export const Project = () => {
  return (
    <Wrapper>
      {ProjectDummy.map((e) => (
        <Card
          key={e.id}
          name={e.name}
          time={e.time}
          job={e.job}
          introduce={e.introduce}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({theme}) => theme.color}
`;
