import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/common/footer/Footer";
import { Wrapper } from "../components/common/header/Wrapper";
import { Introduce } from "../components/introduce/Introduce";
import { ProjectList } from "../components/projectList/ProjectList";

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Head>
          <title>김경호의 포트폴리오</title>
        </Head>
        <Introduce />
        <ProjectList />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
