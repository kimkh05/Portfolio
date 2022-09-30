interface DummyType {
  id: number;
  name: string;
  time: string;
  introduce: string;
  develop: string[];
}

export const ProjectDummy: DummyType[] = [
  {
    id: 1,
    name: "DSM-MM",
    time: "2022.05.13 ~ ",
    introduce:
      "멘토링 사이트와 프로젝트 사이트를 함으로 많은 것을 배울 수 있습니다.",
    develop: ["React", "TypeScript", "Emotion.js"],
  },
  {
    id: 2,
    name: "Maradi",
    time: "2022.09.01 ~ ",
    introduce: "프로젝트에 펀딩을 하여 다른사람에게 도움을 줄 수 있어요",
    develop: ["React", "TypeScript", "Styled-Component"],
  },
];
