import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/footer/Footer";
import { Wrapper } from "../components/header/Wrapper";
import { Introduce } from "../components/Introduce";
import { Project } from "../components/project/Project";

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Head>
          <title>김경호의 포트폴리오</title>
        </Head>
        <Introduce />
        <Project />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
