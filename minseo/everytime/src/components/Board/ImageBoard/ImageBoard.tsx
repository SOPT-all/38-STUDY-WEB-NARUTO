import type { BoardItem } from "../../../types/board";
import { formatPrice } from "../../../utils/Board";

import "./ImageBoard.css";

interface ImageBoardProps {
  boardItems: BoardItem[];
}

const ImageBoard = ({ boardItems }: ImageBoardProps) => {
  return (
    <section className="image-board">
      <ul className="image-board--list">
        {boardItems.map((item) => (
          <li key={item.id} className="image-board--item">
            <img
              className="image-board--image"
              src={item.thumbnailUrl}
              alt={item.title}
            />

            <div className="image-board--info">
              <h3 className="image-board--title title08">{item.title}</h3>
              <p className="image-board--price body07">
                {formatPrice(item.price)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { ImageBoard };
