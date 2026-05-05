import styled from "@emotion/styled";
import BoardHeader from "./BoardHeader";
import BoardItems from "./BoardItems";

export const Box = styled.main`
  margin-bottom: 40px;
  margin-top: 85px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  width: 388px;
  height: 196px;
  justify-content: flex-start;
  border: 1px solid #9f9494;
`;

function BoardBox(props) {
  return (
    <Box>
      <BoardHeader title={props.title} />

      {props.items.map((items) => (
        <BoardItems
          key={items.id}
          text={items.text}
          createdAt={items.createdAt}
        />
      ))}
    </Box>
  );
}
export default BoardBox;
