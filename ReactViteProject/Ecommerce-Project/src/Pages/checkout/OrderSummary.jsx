import dayjs from "dayjs";
import { FormatMoney } from "../../utils/Money";
import axios from "axios";
import {DeliveryOptions} from "../checkout/DeliveryOptions"
export function OrderSummary({cart, deliveryOptions,loadCart}){
    return(
                            <div className="order-summary">
                                {deliveryOptions.length > 0 && cart.map(item => {
                                    let selectedDeliveryday = deliveryOptions.find((option) => {
                                        return option.id === item.deliveryOptionId;
                                    })
                                     
                                    const deleteCartItems=async ()=>{
                                        await axios.delete(`api/cart-items/${item.productId}`)
                                        await loadCart();

                                    };
                                    return (
                                        <div key={item.productId} className="cart-item-container">
                                            <div className="delivery-date">
                                                Delivery date: {dayjs(selectedDeliveryday.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                                            </div>
        
                                            <div className="cart-item-details-grid">
                                                <img className="product-image"
                                                    src={item.product.image} />
        
                                                <div className="cart-item-details">
                                                    <div className="product-name">
                                                        {item.product.name}
                                                    </div>
                                                    <div className="product-price">
                                                        {FormatMoney(item.product.priceCents)}
                                                    </div>
                                                    <div className="product-quantity">
                                                        <span>
                                                            Quantity: <span className="quantity-label">{item.quantity}</span>
                                                        </span>
                                                        <span className="update-quantity-link link-primary">
                                                            Update
                                                        </span>
                                                        <span className="delete-quantity-link link-primary" onClick={deleteCartItems}>
                                                            Delete
                                                        </span>
                                                    </div>
                                                </div>
        
                                                {<DeliveryOptions deliveryOptions={deliveryOptions} item={item} loadCart={loadCart}/>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
    )
}