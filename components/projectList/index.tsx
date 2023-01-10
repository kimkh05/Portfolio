import styled from "@emotion/styled";
import { DummyType, ProjectDummy } from "../../constance/project";

export const ProjectList = () => {
  const gotoProjectOnClick = (id: number) => {
    window.location.href = `/project/${id}`;
  };
  return (
    <_Wrapper>
      <_ProjectList>
        {ProjectDummy.map((e: DummyType) => (
          <_List onClick={() => gotoProjectOnClick(e.id)} key={e.id}>
            <_ProjectTitle>{e.name}</_ProjectTitle>
            <_ListWrapper>
              <span>{e.introduce}</span>
              <_TagWrapper>
                <_SmallTitle>참여 분야</_SmallTitle>
                {e.job.map((v: string, idx: number) => (
                  <_Tag key={idx}>{v}</_Tag>
                ))}
              </_TagWrapper>
              <span>
                <_SmallTitle>기간</_SmallTitle>
                {e.time}
              </span>
              <_TagWrapper>
                <_SmallTitle>사용 기술</_SmallTitle>
                {e.develop.map((v: string, idx: number) => (
                  <_Tag key={idx}>{v}</_Tag>
                ))}
              </_TagWrapper>
            </_ListWrapper>
          </_List>
        ))}
      </_ProjectList>
    </_Wrapper>
  );
};

const _SmallTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const _ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _List = styled.div`
  width: 870px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.color.gray002};
  border-radius: 10px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  cursor: pointer;
  @keyframes sizeup {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes sizedown {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: sizedown 0.4s;
  :hover {
    animation: sizeup 0.4s;
    animation-fill-mode: forwards;
  }
`;

const _ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const _ProjectTitle = styled.span`
  width: 300px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black001};
`;

const _TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _Tag = styled.div`
  width: max-content;
  height: max-content;
  padding: 5px 10px;
  font-size: 14px;
  background: ${({ theme }) => theme.color.black001};
  color: ${({ theme }) => theme.color.white000};
  margin-right: 10px;
  border-radius: 5px;
  :hover {
    background: ${({ theme }) => theme.color.white001};
    color: ${({ theme }) => theme.color.black000};
    border: 1px solid ${({ theme }) => theme.color.black000};
  }
`;
