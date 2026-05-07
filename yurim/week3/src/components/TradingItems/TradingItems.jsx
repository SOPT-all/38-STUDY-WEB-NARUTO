import React from 'react';
import {
  CardWrapper,
  CardTitle,
  DataSet,
  ItemImage,
  InfoWrapper,
  CostText,
} from './TradingItems.style'
import { TradingItemsData } from '../../data/ItemsData/TradingItemsData';

function TradingItems({ cardTitle, dataList }) {
  return (
    // Props적용
    <CardWrapper>
      {/* 3개의 카드들 */}
      {/* 잘린내용은 볼 수 있도록 커서대면 구현 */}
      {/* 잘린내용은 ...으로 처리*/}
      {dataList.map((data) => (
        <DataSet key={data.id}>
          <ItemImage src={data.imgPosition} alt={data.content} />
          {/* 카드제목영역 */}
          <InfoWrapper>
            <CardTitle>{data.content}</CardTitle>
            <CostText>{data.cost}원</CostText>
          </InfoWrapper>
        </DataSet>
      ))}
    </CardWrapper>
  );
}

export default TradingItems;