// 게시판 한 줄

import styled from "@emotion/styled";

type BoardItemProps = {
  title: string;
  createdAt: string;
};

// 날짜 포멧
function formatTime(createdAt: string) {
  const now = new Date();
  const created = new Date(createdAt);
  const diffMin = Math.floor((now.getTime() - created.getTime()) / 1000 / 60); // 경과한 시간 / 1000(ms) / 60(초)

  // 1시간 이하면 ~~분전
  if (diffMin < 60) {
    return `${diffMin}분 전`;
  }

  const month = String(created.getMonth() + 1).padStart(2, "0");
  const day = String(created.getDate()).padStart(2, "0");
  const hour = String(created.getHours()).padStart(2, "0");
  const minute = String(created.getMinutes()).padStart(2, "0");
  return `${month}/${day} ${hour}:${minute}`;
}

function BoardItem({ title, createdAt }: BoardItemProps) {
  return (
    <>
      <Wrapper>
        <Title>{title.slice(0, 18)}</Title>
        <CreatedAt>{formatTime(createdAt)}</CreatedAt>
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
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
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
  font-weight: 500;
  font-size: 11px;
  line-height: 130%;
  color: #a6a6a6;
  white-space: nowrap;
`;
