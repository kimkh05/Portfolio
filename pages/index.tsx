import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/common/footer";
import { Wrapper } from "../components/common/header/Wrapper";
import { Introduce } from "../components/introduce";
import { ProjectList } from "../components/projectList";

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
