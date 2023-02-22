import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductDetails from "../../components/product-details/product-details.component";

const Item = () => {
    const { category, id } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [ item, setItem ] = useState(categoriesMap[category]);


    useEffect(() => {
        setItem(categoriesMap[category]);
    }, [id, categoriesMap, category]);


    return (
        <div>
            {
                item && item.filter((mapi) => mapi.id === parseInt(id))
                .map((product) =>
                    <ProductDetails key={product.id} product={product} />
                )
            }
        </div>
    )
}

export default Item;