// 게시판 전체 박스

import styled from "@emotion/styled";

function BoardList() {
  return (
    <>
      <Wrapper>
        <FreeBoard></FreeBoard>
        <MarketBoard></MarketBoard>
      </Wrapper>
    </>
  );
}

export default BoardList;

const Wrapper = styled.div``;

const FreeBoard = styled.div``;

const MarketBoard = styled.div``;
