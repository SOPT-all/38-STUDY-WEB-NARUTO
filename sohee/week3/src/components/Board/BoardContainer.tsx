import { Board } from './Board';
import { BoardData } from '../../data/BoardData';



function BoardContainer() {
    const 자유 = BoardData.filter((item) => item.category === "자유");
    const 장터 = BoardData.filter((item) => item.category === "장터");

    return (
        <div>
            <Board title="자유 게시판" data={자유} />
            <Board title="장터 게시판" data={장터} />
        </div>
    )
}



export { BoardContainer }