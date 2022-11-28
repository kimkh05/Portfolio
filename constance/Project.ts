export interface DummyType {
  id: number;
  name: string;
  time: string;
  introduce: string;
  develop: string[];
  job: string[];
}

export const ProjectDummy: DummyType[] = [
  {
    id: 1,
    name: "DSM-MM",
    time: "2022.05.13 ~ 2022.12.16",
    introduce:
      "멘토링 사이트와 프로젝트 사이트를 함으로 많은 것을 배울 수 있습니다.",
    develop: ["React", "TypeScript", "Emotion"],
    job: ["Frontend", "Design"],
  },
  {
    id: 2,
    name: "Maradi",
    time: "2022.09.01 ~ 2022.11.30",
    introduce: "프로젝트에 펀딩을 하여 다른사람에게 도움을 줄 수 있어요",
    develop: ["React", "TypeScript", "Styled-Component", "Axios", "Recoil"],
    job: ["Frontend"],
  },
  {
    id: 3,
    name: "Portfolio",
    time: "2022.09.22 ~ ",
    introduce: "저의 스택들을 저만의 디자인으로 보여줄 수 있어요!",
    develop: ["React", "TypeScript", "NextJs", "Emotion"],
    job: ["Frontend", "Design", "Backend(구현중)"],
  },
  {
    id: 4,
    name: "기관지",
    time: "2022.11.03 ~ 2022.11.04",
    introduce: "유연근무제를 통해 직장인들의 출퇴근 시간을 관리해요!",
    develop: ["React", "JavaScript", "Recoil", "Styled-Components"],
    job: ["Frontend", "Design"],
  },
  {
    id: 5,
    name: "Daily_Boram",
    time: "2022.10.01 ~ 2022.12.06",
    introduce:
      "보람 있게 소설 한편, 보람 있게 소설 한 조각. 재미와 행복을 늘 보람있게.",
    develop: [
      "React",
      "JavaScript",
      "Styled-Component",
      "Axios",
      "React-Query",
    ],
    job: ["Frontend"],
  },
];
