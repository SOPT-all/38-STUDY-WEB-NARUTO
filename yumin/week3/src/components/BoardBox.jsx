import styled from "@emotion/styled";
import BoardHeader from "./BoardHeader";
import BoardItems from "./BoardItems";

export const Box = styled.main`
  display: flex;
  flex-direction: column;
  width: 388px;
  height: 196px;
  justify-content: flex-start;
  margin-bottom: 236px;
  border: 1px solid #9f9494;
`;

function BoardBox(props) {
  return (
    <Box>
      <BoardHeader title={props.title} />
      <BoardItems text="수험생인데" createdAt="12분 전" />
      <BoardItems text="한국역사의 이해 한준수교수님" createdAt="42분 전" />
      <BoardItems text="아니 뭔 시험을 이렇게 내냐" createdAt="04/29 08:54" />
      <BoardItems text="나비야나비야어디를가느냐" createdAt="04/29 03:54" />
    </Box>
  );
}
export default BoardBox;
