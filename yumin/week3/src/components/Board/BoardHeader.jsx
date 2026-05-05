import styled from "@emotion/styled";

export const Title = styled.h1`
  color: #d51717;
  font-size: 15px;
  margin: 0px;
  border-bottom: 1px solid #9f9494;
  padding: 5px;
  text-align: left;
`;

function BoardHeader(props) {
  return <Title>{props.title}</Title>;
}

export default BoardHeader;
