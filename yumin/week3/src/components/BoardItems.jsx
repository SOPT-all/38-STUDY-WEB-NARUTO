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
  return (
    <ItemsBox>
      <span>{visibleText}</span>
      <Time>{props.createdAt}</Time>
    </ItemsBox>
  );
}
export default BoardItems;
