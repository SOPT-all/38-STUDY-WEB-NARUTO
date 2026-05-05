import { BoardItemWrapper } from './BoardItem.style';
import { CreatedAtText } from './BoardItem.style';


interface BoardItemProps {
    title: string;
    createdAt: string;
}


const slicedTitle = (title: string) => {
    if (title.length > 15) {
        return title.slice(0, 15) + '';
    }
    return title;
}

const formatCreatedAt = (createdAt: string) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diff = now.getTime() - created.getTime();     
    const minutes = Math.floor(diff / 1000 / 60);

    if (minutes < 60) {
        return `${minutes}분 전`;
    }

    const month = String(created.getMonth() + 1).padStart(2, '0');
    const day = String(created.getDate()).padStart(2, '0');
    const hours = String(created.getHours()).padStart(2, '0');
    const minutesStr = String(created.getMinutes()).padStart(2, '0');

    return `${month}/${day} ${hours}:${minutesStr}`;
}

function BoardItem({ title, createdAt }: BoardItemProps) {
    return (
        <BoardItemWrapper>
            <span>{slicedTitle(title)}</span>
            <CreatedAtText>{formatCreatedAt(createdAt)}</CreatedAtText>
        </BoardItemWrapper>
    )
}
export { BoardItem }