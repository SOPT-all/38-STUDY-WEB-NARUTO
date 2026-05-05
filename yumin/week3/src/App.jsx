import BoardBox from "./components/Board/BoardBox";
import {
  freeBoardItems,
  marketBoardItems,
} from "./components/Board/BoardIData";

import ProductList from "./components/Product/ProductList";

function App() {
  return (
    <div>
      <BoardBox title="자유 게시판" items={freeBoardItems} />
      <BoardBox title="장터 게시판" items={marketBoardItems} />
      <ProductList />
    </div>
  );
}

export default App;
