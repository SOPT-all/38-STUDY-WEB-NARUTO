import styled from "@emotion/styled";

export const ItemsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  padding: 6px;
  border-top: 1px solid #9f9494;
`;

export const Time = styled.div`
  color: #797979;
`;

function BoardItems(props) {
  const visibleText =
    props.text.length > 15 ? props.text.slice(0, 15) + "..." : props.text;

  const createdTime = new Date(props.createdAt);
  const nowTime = new Date();

  const month = String(createdTime.getMonth() + 1).padStart(2, "0");
  const date = String(createdTime.getDate()).padStart(2, "0");
  const h = String(createdTime.getHours()).padStart(2, "0");
  const m = String(createdTime.getMinutes()).padStart(2, "0");
  const diffMin = Math.floor((nowTime - createdTime) / 1000 / 60);

  const formatDate = `${month}/${date} ${h}:${m}`;

  const visibleTime = diffMin < 60 ? `${diffMin}분 전` : formatDate;

  return (
    <ItemsBox>
      <span>{visibleText}</span>
      <Time>{visibleTime}</Time>
    </ItemsBox>
  );
}
export default BoardItems;
