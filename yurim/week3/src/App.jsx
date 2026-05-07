import React from 'react';
import BoardTable from './components/common/BoardTable/BoardTable';
import TradingItems from './components/TradingItems/TradingItems';
import { FreeBoardData } from './data/BoardData/FreeBoardData';
import { MarketBoardData } from './data/BoardData/MarketBoardData';
import { TradingItemsData } from './data/ItemsData/TradingItemsData';
import styled from 'styled-components';
import { Colors } from './variables/Colors';

const AppContainer = styled.div`
  display: flex;
  // 게시판섹션&장터섹션을 가로배치
  flex-direction: row;
  //피그마규격
  width: 1052px;
  height: 932px;
  box-sizing: border-box;
  margin: 0 auto;
  // 상단 공통 여백
  padding-left: 60px;
  padding-top: 85px;
  padding-right: 0;
`;

const BoardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
`;

function App() {
  return (
    <AppContainer>
      <BoardSection>
        <BoardTable
          boardTitle={"자유 게시판"}
          dataList={FreeBoardData}
        />
        {/* isMarket전달 */}
        <BoardTable
          boardTitle={"장터 게시판"}
          dataList={MarketBoardData}
          isMarket={true}
        />
      </BoardSection>
      <TradingItems dataList={TradingItemsData} />
    </AppContainer>
  );
}

export default App;