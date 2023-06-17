import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase/app';
import { db } from './index';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore';

function App (props) {
  // constructor () {
  //   super();
  //   this.state = {
  //     products: [],
  //     loading: true
  //   }
  // }
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //utilise component life cycle methods for retriving the data from firebase
  // componentDidMount() {
    
  //   getDocs(collection(db, "products"))
  //   .then(
  //     (querySnapshot) => {
  //       const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
  //       console.log(newData);
  //       this.setState({
  //         // products: products // below line is same as this line
  //         products: newData,
  //         loading: false
  //       })
  //     }
  //   )

  // }
/* function to get all tasks from firestore in realtime */ 
useEffect(() => {
  const q = query(collection(db, "products"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
  setProducts(newData);
  setLoading(false)
});
},[])

/* function to update document in firestore */
// const handleCheckedChange = async () => {
//   const taskDocRef = doc(db, 'products')
//   try{
//     await updateDoc(taskDocRef, {
//       products
//     })
//   } catch (err) {
//     alert(err)
//   }
// }



  const handleIncreaseQty = async (product)=> {
    // const items = [...products];
    // const index = items.indexOf(product);
    // items[index].qty += 1;
    product.qty += 1
    
    const frankDocRef = doc(db, "products", product.id);
    await updateDoc(frankDocRef, product);

    // setProducts(products)
    // console.log(items[index].qty);
    // setProducts(items)
  }

  const handleDescreaseQty = async (product)=> {
    // const index = products.indexOf(product);
    // if(products[index].qty === 0){
    //   return;
    // }
    // products[index].qty -= 1;
    // setProducts(products)
    product.qty -= 1
    const frankDocRef = doc(db, "products", product.id);
    await updateDoc(frankDocRef, product);
  }

  // const handleDelete = (id)=> {
  //   const items = products.filter((item)=> item.id !== id);

  //   setProducts(items)
  // }

  /* function to delete a document from firstore */ 
  const handleDelete = async (id) => {
    const taskDocRef = doc(db, 'products', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  const getCartCount  = ()=> {
    let count = 0;
    products.forEach(
      (product) => {
        count += product.qty;
      } 
      )
      return count;
  }

  const getCartTotal = ()=> {
    let price = 0;
    products.forEach(
      (product) => {
        price += product.price * product.qty;
      } 
      )
      return price;
  }

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), {
        title: 'title',
        price: 1,
        qty: 1,
        img: ''
      })
      
    } catch (err) {
      alert(err)
    }
  }
  /* function to update document in firestore */
// const handleUpdate = async (e) => {
//   e.preventDefault()
//   const taskDocRef = doc(db, 'products')
//   try{
//     await updateDoc(taskDocRef, {
//       title: title,
//       description: description
//     })
//     onclose()
//   } catch (err) {
//     alert(err)
//   }    
// }

    return (
      <div className="App">
        <Navbar 
          count = {getCartCount()}
        />
        <button onClick={addProduct}>Add a Product</button>
        <Cart 
          products={products} 
          onIncreaseQuantity = {handleIncreaseQty} 
          onDecreaseQuantity = {handleDescreaseQty}
          onDelete = {handleDelete}
        />
        <div>{loading && <h1>Loading....</h1>}</div>
        <div style={{padding: 10, fontSize: 20 }}>TOTAL: {getCartTotal()} </div>
      </div>
    );  
}

export default App;
