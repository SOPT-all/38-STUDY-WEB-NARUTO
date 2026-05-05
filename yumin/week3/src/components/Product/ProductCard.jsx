import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid #9f9494;
  gap: 2px;
`;

export const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

export const Title = styled.h1`
  margin: 0;
  height: 40px;
  display: fles;
  align-items: center;
  font-size: 15px;
  text-align: left;
  padding-left: 10px;
`;

export const Price = styled.div`
  font-size: 13px;
  color: #d51717;
  text-align: left;
  margin-top: auto;
  padding-left: 10px;
  padding-bottom: 7px;
`;

function ProductCard(props) {
  const visibleTitle =
    props.title.length > 8 ? props.title.slice(0, 8) + "..." : props.title;

  const won = props.price.toLocaleString();
  return (
    <Card>
      <Image src={props.image} alt={props.title} />
      <Title>{visibleTitle}</Title>
      <Price>{won}원</Price>
    </Card>
  );
}
export default ProductCard;
