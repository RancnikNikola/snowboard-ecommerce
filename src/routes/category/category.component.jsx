import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinnner.component';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { Link } from 'react-router-dom';
import './category.styles.scss';

const Category = () => {

    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [ products, setProducts ] = useState(categoriesMap[category]);

    const newCategory = category.replace(/-/g, " ");


    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{newCategory}</h2>
            {
                isLoading ? <Spinner /> :
                <div className='category-container'>
                    {
                        products && products.map((product) => (
                            <Link key={product.id} to={`${product.id}`}>
                                <ProductCard product={product} />
                            </Link> 
                        ))
                       
                    }
                </div>
            }
        </Fragment>
    );  
};

export default Category;