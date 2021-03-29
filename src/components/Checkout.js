import React from 'react'
import Card from './Card'
import './Checkout.css'

function Checkout(props){
        return (
            <div className="checkout">
                <div className="checkout-header"><img src='./img/flecha.png' width='50' height='50' /><h1 className="title">Checkout</h1></div>
                <div className="checkout-items">
                {
                    props.items.map(item =>
                        <Card 
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        foto={item.foto}
                        precio={item.precio} />
                    )
                }
                </div>
                <p className="textCantidad">Total <span>$340</span></p>
                <a href="" className="btnCheckout">Checkout</a>
            </div>
        )
    
}
export default Checkout