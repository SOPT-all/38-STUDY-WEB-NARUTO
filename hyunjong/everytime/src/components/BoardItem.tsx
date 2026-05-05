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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #444444;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const CreatedAt = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 11px;
  line-height: 130%;
  color: #a6a6a6;
  white-space: nowrap;
`;
