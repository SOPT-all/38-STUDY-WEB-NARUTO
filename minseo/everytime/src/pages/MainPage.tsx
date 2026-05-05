import { ImageBoard } from "../components/Board/ImageBoard/ImageBoard";
import { TextBoard } from "../components/Board/TextBoard/TextBoard";
import {
  freeBoardItems,
  imageBoardItems,
  marketBoardItems,
} from "../data/boardItems";
import { BoardCategory } from "../types/board";

const MainPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2.4rem",
        gap: "2.4rem",
      }}
    >
      <TextBoard category={BoardCategory.Free} boardItems={freeBoardItems} />
      <TextBoard
        category={BoardCategory.Market}
        boardItems={marketBoardItems}
      />
      <ImageBoard boardItems={imageBoardItems} />
    </main>
  );
};

export { MainPage };
