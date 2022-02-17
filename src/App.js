import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './Contexts/ProductContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	console.log(ProductContext);

	const addItem = item => {
		setCart([...cart, item]);
		// add the given item to the cart
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider>
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>
			</ProductContext.Provider>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
