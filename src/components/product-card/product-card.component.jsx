
import './product-card.styles.scss';


const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;

    return (    
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="product-card-body">
                <span className="name">{ name }</span>
                <span className="price">€{ price }</span>
            </div>
        </div>
    );
};

export default ProductCard;