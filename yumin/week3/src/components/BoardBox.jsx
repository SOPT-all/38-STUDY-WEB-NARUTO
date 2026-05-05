import styled from "@emotion/styled";
import BoardHeader from "./BoardHeader";
import BoardItems from "./BoardItems";
import { freeBoardItems } from "./BoardIData";

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
    </Box>
  );
}
export default BoardBox;
