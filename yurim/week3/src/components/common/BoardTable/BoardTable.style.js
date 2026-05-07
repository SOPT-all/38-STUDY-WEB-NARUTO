import styled from 'styled-components';
import { Colors } from '../../../variables/Colors';
import { BoardLayout } from '../../../variables/Layouts';

// 전체 틀 정의
export const TableWrapper = styled.div`
  width: ${BoardLayout.tableWidth};
  border-left: 1px solid ${Colors.gray};
  border-right: 1px solid ${Colors.gray};
  border-top: 1px solid ${Colors.gray};
  display: flex;
  flex-direction: column;

  // TableWrapper기준으로 바깥쪽이니까 margin
  // 조건부연산자
  margin-left: ${(props) => (props.$isMarket ? '10px' : '0px')} 
`;

export const BoardTitle = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.red};
  border-bottom: 1px solid ${Colors.gray};
  padding: 0 10px;
  box-sizing: border-box;
`;

// 데이터가 세로로 쌓일 수 있도록
export const DataSet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row; 
  // 데이터들 양 끝으로 붙도록
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid ${Colors.gray};
  padding: 0 10px;
  // 레이아웃 붕괴 방지
  box-sizing: border-box;
`;

export const ContentText = styled.div`
  // 최대280px 차지 가능
  max-width: 280px;
  // Week1(자기소개페이지)과제에서의
  // '넘치는 사진 안보이게'와 비슷한 맥락
  white-space: nowrap;
  overflow: hidden;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  color: ${Colors.black};
`;

export const TimeText = styled.div`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  color: ${Colors.darkgray};
`;