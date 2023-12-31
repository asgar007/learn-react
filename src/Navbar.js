import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/34/34568.png?w=740&t=st=1686674194~exp=1686674794~hmac=e7ac50c982d791d6ab449d7af81f5276ffafa483f4cc42257f9526fb29fbad1a'
            alt='Cart Item'/>
            <span style={styles.cartCount}>{props.count}</span>
        </div>
    </div>
  )  
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
}


export default Navbar;


 

