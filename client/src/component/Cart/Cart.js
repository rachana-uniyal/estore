import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as actions from '../../redux/actions';


const Cart=(props)=>{
    const {cart} = useSelector(obj=>obj)
    const userdetails = JSON.parse(sessionStorage.getItem("userdetails"));
    const dispatch = useDispatch()

    const updateCart =(product,op)=>{
        let tmpProduct = {...product};
        if(op=== "add") tmpProduct.quantity=1;
        else tmpProduct.quantity=-1

        dispatch(actions.addCartItem(tmpProduct))
    }

    const paymentClick=()=>{

        const txnID = Math.random().toString().split(".")[1];

        let orderInfo = {
            user: 'Guest',
            product: JSON.stringify(cart.item.map(x=>{
                return { name:x.name, price: x.price, quantity: x.quantity}
            }))
        }

        let payRequest={};
        payRequest = {
            amount:parseFloat(cart.itemPriceTotal),
            txnid:txnID,
            productinfo:JSON.stringify(orderInfo),
            firstname:'Guest',
            email:'rachanauniyal04172gmail.com',
            phone:9557287152,
            lastName:''
        }
        dispatch(actions.payment(payRequest))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.item.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td><img src={item.imageSrc} style={{height:60,width:60}}/></td>
                                        <td>{parseFloat(item.price).toFixed(2)}</td>
                                        <td>
                                            <div>
                                                <span onClick={()=>item.quantity<=1?null : updateCart(item,"sub")}>
                                                    <i className="fa fa-minus"/>
                                                </span >
                                                <input value={item.quantity} disabled/>
                                                    <span onClick={()=>updateCart(item,"add")}>
                                                    <i className="fa fa-plus"/>
                                                    </span>
                                                   
                                            </div>
                                        </td>
                                        <td>{parseFloat(item.itemtotal).toFixed(2)}</td>
                                        <td>
                                            <span onClick={()=>dispatch(actions.removeCartItem(item))}>
                                                <i className="fa fa-times"aria-hidden="true"/>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <Link to={'/estore'} className='btn btn-primary'>
                        {`Continue Shopping`}
                    </Link>
                </div>
                <div className="col-lg-4 col-md-4 offset-md-2 offset-lg-2">
                    <div className="alert alert-warning">
                        <h6>Cart Total</h6>
                        <ul>
                            <li style={{color:'black'}}>
                                Total : <span>{`$ ${parseFloat(cart.itemPriceTotal).toFixed(2)}`}</span>
                            </li>
                        </ul>
                        {userdetails ?
                        (<button className="btn btn-warning"onClick={()=>paymentClick()}>{`Proceed to Checkout`}</button>)
                        :
                        (
                            <NavLink className="btn btn-warning" to="/login" state={{redirectto:"/estore/viewcart"}}>{`Proceed to Cart`}</NavLink>
                        )
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;