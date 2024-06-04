import { useContext } from "react";
import CartItem from "./CartItem";
import PaymentCard from "./PaymentCard";
import arrowLeft from "../assets/icons/arrow-left.svg";
import { CartContext, ICartItem } from "../context/CartContext";

const ShoppingCart = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className="flex justify-center flex-wrap gap-[55px]">
			<div className="flex flex-col gap-6 min-w-[600px]">
				<button className="flex items-center gap-1 w-fit">
					<img src={arrowLeft} alt="Arrow left" />
					Shopping Continue
				</button>

				<hr />

				<div className="mb-[5px]">
					<h3 className="text-lg ">Shopping cart</h3>
					<p className="text-sm ">
						You have {cartItems.length} item{cartItems.length !== 1 && "s"} in
						your cart
					</p>
				</div>

				{cartItems.map((item: ICartItem) => (
					<CartItem
						id={item.id}
						key={item.id}
						title={item.title}
						price={item.price}
						image={item.image}
						amount={item.amount}
						subtitle={item.subtitle}
					/>
				))}
			</div>

			<PaymentCard />
		</div>
	);
};

export default ShoppingCart;
