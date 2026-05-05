import { ProductWrapper } from "./Product.style";
import { ProductItem } from "./ProductItem";

interface ProductProps {
  title: string;
  price: number;
  image: string;
}

function Product({ title, price, image }: ProductProps) {
  return (
    <ProductWrapper>
      <ProductItem title={title} price={price} image={image} />
    </ProductWrapper>
  );
}

export { Product };