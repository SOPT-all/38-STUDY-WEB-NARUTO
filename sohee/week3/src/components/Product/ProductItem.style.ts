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

  margin: 10px 10px 0;
  padding: 0;

  color: #444444;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.16px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PriceText = styled.span`
  width: 132px;
  height: 16px;

  margin: 25px 10px 0;
  padding: 0;

  color: red;
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.12px;
`;