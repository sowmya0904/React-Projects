import { FormatMoney } from "../../utils/Money";
import dayjs from "dayjs";
import axios from "axios";
export function DeliveryOptions({ deliveryOptions, item, loadCart }) {

    return (<div className="delivery-options">
        <div className="delivery-options-title">
            Choose a delivery option:
        </div>
        {deliveryOptions.map((option) => {
            let priceShipping = 'FREE SHIPPING';
            if (option.priceCents > 0) {
                priceShipping = `${FormatMoney(option.priceCents)}-shipping`;
            }
            const updateDeliveryOption = async () => {
                await axios.put(`/api/cart-items/${item.productId}`, {
                    deliveryOptionId: option.id

                })
                await loadCart();
            };
            return (
                <div className="delivery-option" key={option.id} onClick={updateDeliveryOption}>
                    <input type="radio"
                        checked={option.id === item.deliveryOptionId}
                        onChange={()=>{}}
                        className="delivery-option-input"
                        name={`delivery-option-${item.productId}`} />
                    <div>
                        <div className="delivery-option-date">
                            {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                        </div>
                        <div className="delivery-option-price">
                            {priceShipping}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>)
}