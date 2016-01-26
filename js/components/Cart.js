const React = require("react");
const Ps = require("perfect-scrollbar");
let CartItem = require('./CartItem');
let {cartItems, products} = require("./Data");

let Cart = React.createClass({
	componentDidMount() {
		// let $content = document.querySelector(".cart__content");
    let $content = React.findDOMNode(this.refs.cat__content);
		Ps.initialize($content);
	},
	render() {
		return (
			<div className="cart">
				<h3 className="cart__title">Shopping Cart</h3>
				<div className="cart__content" ref="cat__content">
				  <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
				  {Object.keys(cartItems).map((item, index) => (
				  	<CartItem key={index} cartItem={cartItems[item]} product={products[item]}/>
				  ))}
				</div>
			</div>
		)
	}
});

module.exports = Cart;