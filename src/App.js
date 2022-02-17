import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './Contexts/ProductContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './Contexts/CartContext';

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
			<CartContext.Provider value={cart}>
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItems}}>
			<Route exact path="/">
				<Products />
			</Route>
			</ProductContext.Provider>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
