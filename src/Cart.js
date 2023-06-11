import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  handleIncreaseQty = (product)=> {
    
    console.log(product);
    
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      // products: products // below line is same as this line
      products
    })
  }

  handleDescreaseQty = (product)=> {
    
    console.log(product);
    
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
      return;
    }
    products[index].qty -= 1;

    this.setState({
      // products: products // below line is same as this line
      products
    })
  }

  handleDelete = (id)=> {
    const { products } = this.state;
    const items = products.filter((item)=> item.id !== id);

    this.setState({
      products: items
    })
  }

  render () {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem 
            product={product} 
            key={product.id} 
            onIncreaseQuantity = {this.handleIncreaseQty} 
            onDecreaseQuantity = {this.handleDescreaseQty}
            onDelete = {this.handleDelete}
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;