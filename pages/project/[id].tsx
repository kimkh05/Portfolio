import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ProjectDummy, DummyType } from "../../constance/project";

const SeeDetailProject = () => {
  const { id } = useRouter().query;
  const [projectData, setProjectData] = useState<DummyType>({
    id: 0,
    name: "",
    time: "",
    introduce: "",
    develop: [],
    job: [],
  });
  
  const getProjectData = () => {
    const numberOfId = Number(id);
    for (const value of ProjectDummy) {
      if (numberOfId === value.id) {
        setProjectData(value);
        console.log(projectData);
        break;
      }
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);
  return (
    <div>
      <span></span>
    </div>
  );
};

export default SeeDetailProject;
