import styled from "@emotion/styled";
import { Product } from "./Product";
import { ProductData } from "../../data/ProductData";

const ProductContainerWrapper = styled.div`
  display: flex;
  gap: 0;
  margin: 80px;
`;

function ProductContainer() {
  return (
    <ProductContainerWrapper>
      {ProductData.map((product) => (
        <Product
          key={product.title}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </ProductContainerWrapper>
  );
}

export { ProductContainer };