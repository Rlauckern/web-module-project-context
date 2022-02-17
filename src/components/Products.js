import React, { useContext } from 'react';
import ProductContext from '../Contexts/ProductContext';
// Components
import Product from './Product';
import ProductContext from '../Contexts/ProductContext';


const Products = props => {
	const v{ products } = useContext(ProductContext);
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					
				/>
			))}
		</div>
	);
};

export default Products;
