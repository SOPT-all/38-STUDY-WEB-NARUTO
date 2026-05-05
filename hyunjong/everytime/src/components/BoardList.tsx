// 게시판 전체 박스

import styled from "@emotion/styled";
import BoardItem from "./BoardItem";

type BoardListProps = {
  boardTitle: string;
  posts: { id: number; title: string; createdAt: string }[];
};
function BoardList({ boardTitle, posts }: BoardListProps) {
  return (
    <>
      <Wrapper>
        <Boardtitle>{boardTitle}</Boardtitle>
        <List>
          {/* 스프레드로 복사본 만들고 복사본 뒤집기 */}
          {[...posts].reverse().map((post) => (
            <BoardItem
              key={post.id}
              title={post.title}
              createdAt={post.createdAt}
            />
          ))}
        </List>
      </Wrapper>
    </>
  );
}

export default BoardList;

const Wrapper = styled.div`
  width: 388px;
  border: 1px solid #e3e3e3;
  overflow: hidden;
`;

const Boardtitle = styled.div`
  width: 388px;
  padding: 10px;
  background: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #f91f15;
`;

const List = styled.div`
  margin: 0;
  padding: 0;
`;
