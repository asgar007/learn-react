import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase/app';
import { db } from './index';
import { collection, getDocs } from 'firebase/firestore';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  //utilise component life cycle methods for retriving the data from firebase
  componentDidMount() {
    // let { products } = this.state;
    getDocs(collection(db, "products"))
    .then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
        console.log(newData);
        this.setState({
          // products: products // below line is same as this line
          products: newData,
          loading: false
        })
      }
    )
  }

  handleIncreaseQty = (product)=> {    
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

  getCartCount  = ()=> {
    const { products } = this.state;
    let count = 0;
    products.forEach(
      (product) => {
        count += product.qty;
      } 
      )
      return count;
  }

  getCartTotal = ()=> {
    const { products } = this.state;
    let price = 0;
    products.forEach(
      (product) => {
        price += product.price * product.qty;
      } 
      )
      return price;
  }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <Cart 
          products={products} 
          onIncreaseQuantity = {this.handleIncreaseQty} 
          onDecreaseQuantity = {this.handleDescreaseQty}
          onDelete = {this.handleDelete}
        />
        <div>{loading && <h1>Loading....</h1>}</div>
        <div style={{padding: 10, fontSize: 20 }}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );  
  }
}

export default App;
