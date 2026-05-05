import styled from "@emotion/styled";
import ProductCard from "./ProductCard";
import { productItems } from "./ProductDate";

export const List = styled.main`
  margin: 85px;
  width: 460px;
  height: 273px;
  border: 1px solid #9f9494;
  display: flex;
`;

function ProductList(props) {
  return (
    <List>
      {productItems.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </List>
  );
}
export default ProductList;
