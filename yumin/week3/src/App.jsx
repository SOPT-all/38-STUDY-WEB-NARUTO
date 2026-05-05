import styled from "@emotion/styled";
import BoardBox from "./components/Board/BoardBox";
import { freeBoardItems, marketBoardItems } from "./components/Board/BoardData";

import ProductList from "./components/Product/ProductList";

export const FullBox = styled.main`
  display: flex;
  gap: 84px;
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <FullBox>
      <LeftBox>
        <BoardBox title="자유 게시판" items={freeBoardItems} />
        <BoardBox title="장터 게시판" items={marketBoardItems} />
      </LeftBox>

      <ProductList />
    </FullBox>
  );
}

export default App;
