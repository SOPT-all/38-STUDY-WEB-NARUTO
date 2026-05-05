import styled from "@emotion/styled";

export const ImageBox = styled.div`
  width: 100%;
  height: 192px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ProductTitle = styled.p`
    width: 132px;
    height: 21px;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -1%;
    color: #444444;
    margin-left: 10px;
    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
    
`;

export const PriceText = styled.span`
  display: block;

  color: red;
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.12px;

  padding: 0 10px 10px;
`;