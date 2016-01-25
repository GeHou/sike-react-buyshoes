const React = require("react");

let CartItem =  React.createClass({
	render() {
		let item = this.props.cartItem;
		let {id, quantity} = this.props.cartItem;
		let {name, price, imagePath} = products[id];
		return (
			<div className="cart-item">
			  <div className="cart-item__top-part">
			    <div className="cart-item__image">
			      <img src={imagePath} />
			    </div>

			    <div className="cart-item__top-part__middle">
			      <div className="cart-item__title">
			        {name}
			      </div>

			      <div className="cart-item__price">
			      	{quantity > 1 ? `$${price} x ${quantity}` : `$${price}`}		      
			      </div>
			    </div>

			    <img className="cart-item__trash" src="img/trash-icon.svg"/>
			  </div>

			  <QuantityControl item={item} variant="gray"/>
			  
			</div>
			);
	}
});

module.exports = CartItem;