import { ImageBox, ProductTitle, PriceText } from "./ProductItem.style";

interface ProductItemProps {
  title: string;
  price: number;
  image: string;
}

const formatPrice = (price: number) => {
  return price.toLocaleString();
};

const slicedProductTitle = (title: string) => {
    if (title.length > 15) {
        return title.slice(0, 15) + '...';
    }
    return title;
}


function ProductItem({ title, price, image }: ProductItemProps) {
  return (
    <>
      <ImageBox>
        <img src={image} alt={title} />
      </ImageBox>

      <ProductTitle>{slicedProductTitle(title)}</ProductTitle>
      <PriceText>{formatPrice(price)}원</PriceText>
    </>
  );
}

export { ProductItem };