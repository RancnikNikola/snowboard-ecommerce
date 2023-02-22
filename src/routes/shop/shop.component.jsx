import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-prevew/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import Item from '../item/item.component';
import './shop.styles.scss';


const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    });

    return (
       <Routes>
            <Route index element={ <CategoriesPreview /> } />
            <Route path=':category' element={ <Category /> } />
            <Route path=':category/:id' element={ <Item /> } />
       </Routes>
    );
};

export default Shop;