import ShoppingCart from "./components/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import { initDB } from "react-indexed-db-hook";
import { DBConfig } from "./db/DBConfig";

initDB(DBConfig);

const App = () => {
	return (
		<CartProvider>
			<main className="py-9 px-5 w-full tabletSm:px-8 tabletSm:py-12">
				<ShoppingCart />
			</main>
		</CartProvider>
	);
};

export default App;
