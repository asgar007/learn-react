import React from 'react';

const CartItem = (props) => {

    // console.log('props', props);
    const { price, title, qty, id, img } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDelete} = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src= {img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1250/1250544.png?w=740&t=st=1686470713~exp=1686471313~hmac=e4bc6a94e38eb9a4de3b1828a93f4143ccfda9a6298bbd85856b9f61309a4ece"
              onClick={()=> {onIncreaseQuantity(product)}}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://img.freepik.com/free-icon/minus_318-749947.jpg?size=626&ext=jpg"
              onClick={()=> {onDecreaseQuantity(product)}}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://img.freepik.com/free-icon/garbage_318-112902.jpg?size=626&ext=jpg"
              onClick={()=> {onDelete(id)}}
            />
          </div>
        </div>
      </div>
    );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;


 

