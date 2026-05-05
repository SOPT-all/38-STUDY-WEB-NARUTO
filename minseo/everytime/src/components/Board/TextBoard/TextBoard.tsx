import { EMPTY_BOARD_ITEMS } from "../../../constants/board";
import type { BoardCategory, BoardItem } from "../../../types/board";
import { formatBoardCreatedAt } from "../../../utils/Board";

import "./TextBoard.css";

interface TextBoardProps {
  category: BoardCategory;
  boardItems: BoardItem[];
}

const TextBoard = ({ category, boardItems }: TextBoardProps) => {
  const isBoardEmpty = boardItems.length === EMPTY_BOARD_ITEMS;
  return (
    <section className="text-board">
      <div className="text-board--header">
        <p className="text-board--category title03">{category} 게시판</p>
      </div>

      <div className="text-board--content">
        {isBoardEmpty && (
          <p className="text-board--empty body05">게시물이 없습니다.</p>
        )}
        <ul className="text-board--list">
          {boardItems.map((item) => (
            <li key={item.id} className="text-board--item">
              <h3 className="text-board--title body05">{item.title}</h3>

              {item.createdAt && (
                <time
                  className="text-board--date caption06"
                  dateTime={item.createdAt}
                >
                  {formatBoardCreatedAt(item.createdAt)}
                </time>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { TextBoard };
