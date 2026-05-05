// 게시판 한 줄

import styled from "@emotion/styled";

type BoardItemProps = {
  title: string;
  createdAt: string;
};

function BoardItem({ title, createdAt }: BoardItemProps) {
  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <CreatedAt>{createdAt}</CreatedAt>
      </Wrapper>
    </>
  );
}

export default BoardItem;

const Title = styled.div``;
const Wrapper = styled.div``;
const CreatedAt = styled.div``;
