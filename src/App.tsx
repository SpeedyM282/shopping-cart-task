import ShoppingCart from "./components/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import { initDB } from "react-indexed-db-hook";
import { DBConfig } from "./db/DBConfig";

initDB(DBConfig);

const App = () => {
	return (
		<CartProvider>
			<main className="py-12 px-8 w-full">
				<ShoppingCart />
			</main>
		</CartProvider>
	);
};

export default App;
