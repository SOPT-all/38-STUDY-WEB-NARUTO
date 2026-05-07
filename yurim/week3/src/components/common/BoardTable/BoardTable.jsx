import React from 'react';
import {
  TableWrapper,
  BoardTitle,
  DataSet,
  ContentText,
  TimeText,
} from './BoardTable.style'
import { UploadData } from '../../../data/UploadData';

function BoardTable({ boardTitle, dataList, isMarket }) {
  return (
    // Props적용
    <TableWrapper $isMarket={isMarket}>
      {/* 게시판제목영역 */}
      <BoardTitle>{boardTitle}</BoardTitle>
      {/* 4개의 게시글들 */}
      {/* 잘린내용은 볼 수 있도록 커서대면 구현 */}
      {dataList.map((data) => (
        <DataSet key={data.id}>
          <ContentText title={data.content}>
            {data.content}
          </ContentText>
          <TimeText>
            {UploadData(data.createdAt)}
          </TimeText>
        </DataSet>
      ))}
    </TableWrapper>
  );
}

export default BoardTable;