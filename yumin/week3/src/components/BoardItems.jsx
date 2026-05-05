import styled from "@emotion/styled";

export const ItemsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
function BoardItems(props) {
  return (
    <ItemsBox>
      <span>{props.text}</span>
      <span>{props.time}</span>
    </ItemsBox>
  );
}
export default BoardItems;
