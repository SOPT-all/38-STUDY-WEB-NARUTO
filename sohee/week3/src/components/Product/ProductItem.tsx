import { PriceText } from './Product.style';

interface ProdcutItemProps {
    title: string;
    price: number;
    image: string;
}
const formatPrice = (price: number) => {
    return price.toLocaleString();
}

function ProductItem({ title, price, image }: ProdcutItemProps) {
    return (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
            <PriceText>{formatPrice(price)}원</PriceText>
        </div>
    )
}

export { ProductItem }