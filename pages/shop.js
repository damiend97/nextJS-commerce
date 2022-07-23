import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'
import { useEffect } from 'react'

export default function Home({products}) {
    useEffect(() => {
        console.log("Products: ", products);
    }, [])

    return (
        <Layout title="Shop - NextCom">
            <div className="text-3xl text-center width-full border p-5 border-gray-500 text-gray-900">Our Products</div>
            <ProductList products={products} />
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products?limit=10');
    const products = await res.json();

    return {
        props: {
            products,
        }
    }
}