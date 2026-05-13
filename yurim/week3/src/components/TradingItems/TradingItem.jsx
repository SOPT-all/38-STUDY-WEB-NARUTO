import * as S from "./TradingItem.style";

function TradingItems({ dataList }) {
  return (
    // Props적용
    <S.CardWrapper>
      {/* 3개의 카드들 */}
      {/* 잘린내용은 볼 수 있도록 커서대면 구현 */}
      {/* 잘린내용은 ...으로 처리*/}
      {dataList.map((data) => (
        <S.BoardItem key={data.id}>
          <S.ItemImage src={data.imgPosition} alt={data.content} />
          {/* 카드제목영역 */}
          <S.InfoWrapper>
            <S.CardTitle>{data.content}</S.CardTitle>
            <S.CostText>{data.cost}원</S.CostText>
          </S.InfoWrapper>
        </S.BoardItem>
      ))}
    </S.CardWrapper>
  );
}

export default TradingItems;
