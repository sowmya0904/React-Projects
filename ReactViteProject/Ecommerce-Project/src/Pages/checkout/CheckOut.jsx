import './CheckOut.css'
import './checkout-header.css'
import { FormatMoney } from '../../utils/Money'
import { useState, useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'
export function CheckOut(props) {
    const cart = props.cart;
    const [paymentSummary, setPaymentSummary] = useState(null);
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then(response => setDeliveryOptions(response.data))
        axios.get('/api/payment-summary')
            .then(response => setPaymentSummary(response.data))
    }, [])
    return (
        <>
            <title>Checkout</title>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <a href="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </a>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<a className="return-to-home-link"
                            href="/">3 items</a>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    {<OrderSummary deliveryOptions={deliveryOptions} cart={cart} />}

                    {<PaymentSummary paymentSummary={paymentSummary} />}
                </div>
            </div>
        </>
    )

}