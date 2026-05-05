import styled from "@emotion/styled";

export const BoardItemWrapper = styled.div`
  width: 100%;
  height: 39px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
  border-bottom: 1px solid #e3e3e3;
  box-sizing: border-box;

  background-color: #ffffff;
  &:last-child {
    border-bottom: none;
  }
`;

export const CreatedAtText = styled.span`
  color: #999999;
  font-size: 0.9rem;
`;
