import './HomePage.css'
import { Header } from '../../Components/Header'
import {products} from '../../starting-code/data/products'
import {FormatMoney} from '../../utils/Money'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { ProductsGrid } from './ProductsGrid'
export function HomePage(props){
    const cart = props.cart;

    const[products, setProducts]=useState([]);

    useEffect(()=>{
    axios.get('api/products')
    .then((response)=>setProducts(response.data))

    },[])


    
return (
    <>
    <title>Ecommerce</title>
    <Header cart={cart}/>


<div className="home-page">
{<ProductsGrid products={products}/>}
</div>
</>
);
}