import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {

    const newTitle = title.replace(/-/g, " ");

    return (
        <div className='category-preview-container'>
            <div className='category-preview-title'>
                <h2 className='title'>{ newTitle }</h2>
                <Link to={title} className='see-all'>
                    <span>see all &gt;</span>
                </Link>
            </div>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4)
                    .map((product) =>
                    <Link key={product.id} to={`${title}/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryPreview;