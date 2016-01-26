const React = require("react");
let Product = require('./Product');
let {cartItems, products} = require("./Data");

let Products = React.createClass({
  render() {
    return (
      <div className="products">
        {Object.keys(products).map((item, index) => (
            <Product key={index} product={products[item]}/>
        ))}
      </div>
    );
  }
});

module.exports = Products;