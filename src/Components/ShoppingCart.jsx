import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity,  decreaseItemQuantity} from './CartSlice';
import SuperCoin from './SuperCoin';


const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  
  const totalAmmount = cartItems.reduce((total, item) => total + (item.price*item.quantity),0);


  const handleRemoveItem = itemId =>{
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = ()=>{
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = itemId =>{
   dispatch(increaseItemQuantity(itemId)); 
  };

  const handleDecreaseQuantity = itemId =>{
    dispatch(decreaseItemQuantity(itemId));
  };



  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {
          cartItems.map(item=>(
            <li key={item.id} className='cart-item'>
                 <span>{item.name} - ${item.price} </span>
                 <div className="quantity-controls">
                    <button onClick={()=>handleIncreaseQuantity(item.id)} className="quantity-control-btn">+</button>
                    <span> {item.quantity}</span>
                    <button onClick={()=>handleDecreaseQuantity(item.id)} className="quantity-control-btn">-</button>
                  </div>
                  <button onClick={()=>handleRemoveItem(item.id)} className="remove-item-btn">Remove</button>
            
            </li>
          ))
        }
        
       
      </ul>
      <button onClick={handleClearCart} className='clear-cart-btn'>Clear cart</button>
      { totalAmmount>0 &&
          <p>Total amount : {totalAmmount}$</p>
        }
    </div>
    <div>
      {SuperCoin()}
    </div>
    
  
    </>
  );
};

export default ShoppingCart;
