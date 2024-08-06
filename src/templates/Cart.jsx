
import * as Components from './Components';
import React,{ useState} from 'react';
import { useEffect } from 'react';
import "./cart.css";

const Cart = ({cart, setCart, handleChange,setShow ,toggleComponent,login}) => {
    const [price, setPrice] = useState(0);
    const handleOrder = () => {
        if (login === true) {
            alert("Order Placed Successfully");
            setCart([]);
            setPrice(0);
        } else {
            alert("Please Login First");
            toggleComponent(); 
        }
    }
    

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        
    }

    useEffect(()=>{
        handlePrice();
    })
    useEffect(()=>{
        if(cart.length === 0){
            setShow(true);
        }
    },[price])

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.image} />
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
        <Components.OrderContainer>
            <Components.GhostButton onClick={handleOrder}>Order</Components.GhostButton>
        </Components.OrderContainer>
    </article>
  )
}

export default Cart
