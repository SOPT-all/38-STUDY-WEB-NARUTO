import styled from "@emotion/styled";
import { freePosts, marketPosts } from "./data/boardData";
import { products } from "./data/productData";
import BoardList from "./components/BoardList";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Container>
        <BoardContainer>
          <FreeBoard>
            <BoardList boardTitle="자유 게시판" posts={freePosts} />
          </FreeBoard>
          <MarketBoard>
            <BoardList boardTitle="장터 게시판" posts={marketPosts} />
          </MarketBoard>
        </BoardContainer>
        <ProductContainer>
          <ProductList cards={products} />
        </ProductContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  height: 600px;
`;
const BoardContainer = styled.div`
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

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 460px;
  height: 273px;
  top: 85px;
  left: 532px;
  gap: 2px;
  opacity: 1;
`;
