import TextBoard from "./components/Board/TextBoard";
import { boardItems } from "./data/boardItems";
import { BoardCategory } from "./types/board";

function App() {
  return (
    <>
      <TextBoard category={BoardCategory.Free} boardItems={boardItems} />
    </>
  );
}

export default App;
