import useCartItems from "./db/useCartItems";
import ShoppingCart from "./components/ShoppingCart";
import { CartProvider } from "./context/CartContext";

const App = () => {
	useCartItems();

	return (
		<CartProvider>
			<main className="py-12 px-8 w-full">
				<ShoppingCart />
			</main>
		</CartProvider>
	);
};

export default App;
