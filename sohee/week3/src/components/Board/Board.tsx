import { BoardItem } from './BoardItem';
import { BoardWrapper } from './Board.style';
import {BoardTitle} from './Board.style';

interface BoardProps {
    title: string;
    data: { id: number; title: string; createdAt: string;}[];
}


function Board({ title, data }: BoardProps) {
     const sortedData = [...data].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return (
        <BoardWrapper>
            <BoardTitle>{title}</BoardTitle>
            {sortedData.map((item) => (
                <BoardItem key={item.id} title={item.title} createdAt={item.createdAt} />
            ))}
        </BoardWrapper>
    )
}

export { Board }