import styled from "@emotion/styled";
import { Title } from "./BoardHeader";
import BoardItems from "./BoardItems";

export const Box = styled.main`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: flex-start;
`;

function BoardBox() {
  return (
    <Box>
      <Title>자유 게시판</Title>
      <BoardItems text="수험생인데" time="12분 전" />
      <BoardItems text="한국역사의 이해 한준수교수님" time="42분 전" />
      <BoardItems text="아니 뭔 시험을 이렇게 내냐" time="04/29 08:54" />
      <BoardItems text="나비야나비야어디를가느냐" time="04/29 03:54" />

      <Title>장터 게시판</Title>
      <BoardItems text="공학수학 책 팝니다(거의 새 거)" time="15분 전" />
      <BoardItems text="원룲 양도 받을 분 있나요" time="34분 전" />
      <BoardItems text="지반소 25 기출 구해요" time="55분 전" />
      <BoardItems text="햄버거 쿠폰 반값에 팝니다" time="04/28 17:49" />
    </Box>
  );
}
export default BoardBox;
