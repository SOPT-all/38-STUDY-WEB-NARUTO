import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-size: 15px;
`;

export const Price = styled.div`
  font-size: 25px;
  color: #d51717;
`;

function ProductCard(props) {
  return (
    <Card>
      <Image src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
      <Price>{props.price}</Price>
    </Card>
  );
}
export default ProductCard;
