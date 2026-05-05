// 카드 묶는 컨테이너
import styled from "@emotion/styled";
import ProductCard from "./ProductCard";

type ProductListProps = {
  cards: { id: number; image: string; title: string; price: number }[];
};

function ProductList({ cards }: ProductListProps) {
  return (
    <>
      <Wrapper>
        {[...cards].reverse().map((card) => (
          <ProductCard
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default ProductList;

const Wrapper = styled.div`
  display: flex;
  width: 460px;
  height: 273px;
  top: 85px;
  left: 532px;
  gap: 2px;
`;
