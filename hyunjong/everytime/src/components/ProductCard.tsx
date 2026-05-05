// 상품 카드 하나
import styled from "@emotion/styled";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
};
function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <>
      <Wrapper>
        <ImgContainer>
          <Image src={image} alt={title} />
        </ImgContainer>
        <ItemContainer>
          <Title>{title}</Title>
          <Price>{price.toLocaleString()}원</Price>
        </ItemContainer>
      </Wrapper>
    </>
  );
}

export default ProductCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 152px;
  height: 273px;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 152px;
  height: 192px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 152px;
  height: 80px;
  gap: 25px;
  padding: 10px;
  border: 1px solid #e3e3e3;
`;

const Image = styled.img`
  width: 152px;
  height: 192px;
`;
const Title = styled.div`
  width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  color: #444444;
`;
const Price = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  color: #f91f15;
`;
