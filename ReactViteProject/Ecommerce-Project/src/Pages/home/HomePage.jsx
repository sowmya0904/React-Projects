import './HomePage.css'
import { Header } from '../../Components/Header'
import { products } from '../../starting-code/data/products'
import { FormatMoney } from '../../utils/Money'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductsGrid } from './ProductsGrid'
export function HomePage(props) {
    const cart = props.cart;
    const loadCart = props.loadCart

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeProducts = async () => {
            const res = await axios.get('api/products');
            setProducts(res.data);
        };
        getHomeProducts();

    }, [])



    return (
        <>
            <title>Ecommerce</title>
            <Header cart={cart} />


            <div className="home-page">
                {<ProductsGrid products={products} loadCart={loadCart} />}
            </div>
        </>
    );
}