const React = require("react");

let QuantityControl = React.createClass({
	render() {
		let {quantity} = this.props.item;
		return(
			<div className="cart-item__qty">
			  <div className="adjust-qty">
			    <a className="adjust-qty__button">-</a>
			    <div className="adjust-qty__number">{quantity}</div>
			    <a className="adjust-qty__button">+</a>
			  </div>
			</div>
		)
	}
});

module.exports = QuantityControl;