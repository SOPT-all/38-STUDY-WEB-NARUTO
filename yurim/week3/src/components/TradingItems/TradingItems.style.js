import styled from 'styled-components';
import { Colors } from '../../variables/Colors';
import { CardLayout } from '../../variables/Layouts';

// 전체 카드섹션
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  // 게시판섹션과의 거리를 위해
  margin-left: 84.22px;
  // 화면 오른쪽 끝 여백
  margin-right: 59.78px;
`;

// 각각의 카드정의
export const DataSet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: ${CardLayout.cardWidth};  // 152px
  height: ${CardLayout.cardHeight}; // 272px
  border: 1px solid ${Colors.gray};
  box-sizing: border-box;
  overflow: hidden;
`;

// 아이템 이미지
export const ItemImage = styled.img`
  width: 100%;
  height: 192px; // 피그마내의 이미지 고정높이
  object-fit: cover; // 1주차과제 참고
  border-bottom: 1px solid ${Colors.gray};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  width: 100%;
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  display: block;
  color: ${Colors.black};
  // 말줄임표...
  // BoardTable와 동일
  width: 100%;
  max-width: 132px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
`;

export const CostText = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  color: ${Colors.red};
`;