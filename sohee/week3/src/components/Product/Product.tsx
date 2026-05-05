import {ProductItem} from './ProductItem';
import { ProductData } from '../../data/ProductData';
import { ProductWrapper } from './Product.style';


function Product() {
    return (
        <ProductWrapper>
            {ProductData.map((item) => (
                <ProductItem key={item.id} title={item.title} price={item.price} image={item.image} />
            ))}
        </ProductWrapper>
    )
}

export { Product }