import { useState } from "react";
import BoardBox from "./components/Board/BoardBox";
import {
  freeBoardItems,
  marketBoardItems,
} from "./components/Board/BoardIData";

function App() {
  return (
    <div>
      <BoardBox title="자유 게시판" items={freeBoardItems} />
      <BoardBox title="장터 게시판" items={marketBoardItems} />
    </div>
  );
}

export default App;
