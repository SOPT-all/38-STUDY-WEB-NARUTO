import type { BoardCategory, BoardItem } from "../../types/board";

interface TextBoardProps {
  category: BoardCategory;
  boardItems: BoardItem[];
}

const TextBoard = ({ category, boardItems }: TextBoardProps) => {
  return (
    <div className="text-board">
      <h2>{category} 게시판</h2>
      <ul>
        {boardItems.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>Created at: {item.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextBoard;
