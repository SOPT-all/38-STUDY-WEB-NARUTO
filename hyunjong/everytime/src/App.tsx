import styled from "@emotion/styled";
import { freePosts, marketPosts } from "./data/boardData";
import BoardList from "./components/BoardList";
function App() {
  return (
    <>
      <Container>
        <FreeBoard>
          <BoardList boardTitle="자유 게시판" posts={freePosts} />
        </FreeBoard>
        <MarketBoard>
          {" "}
          <BoardList boardTitle="장터 게시판" posts={marketPosts} />
        </MarketBoard>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;

const FreeBoard = styled.div`
  position: absolute;
  top: 85px;
  left: 60px;
`;

const MarketBoard = styled.div`
  position: absolute;
  top: 321px;
  left: 70px;
`;
