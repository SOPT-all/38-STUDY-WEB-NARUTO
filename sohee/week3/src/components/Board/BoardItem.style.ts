import styled from "@emotion/styled";

export const BoardTitle = styled.h2`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  margin: 0;
  padding: 0 10px;

  color: #f91f15;
  font-size: 16px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.16px;

  border-bottom: 1px solid #e3e3e3;
  box-sizing: border-box;
`;

export const BoardItemWrapper = styled.div`
  width: 100%;
  height: 39px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  color: #444444;
  font-size: 15px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.3px;

  border-bottom: 1px solid #e3e3e3;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }
`;

export const CreatedAtText = styled.span`
  color: #a6a6a6;
  font-size: 11px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0;
`;