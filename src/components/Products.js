import React from 'react';

// Components
import Product from './Product';
import ProductContext from '../Contexts/ProductContext';


const Products = props => {
	const values = useContext(ProductContext);
	console.log(values);
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
