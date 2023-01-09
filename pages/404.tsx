import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function custom404() {
  const router = useRouter();
  return (
    <_Wrapper>
      <span>뒤로 가기</span>
    </_Wrapper>
  );
}

const _Wrapper = styled.div``;
