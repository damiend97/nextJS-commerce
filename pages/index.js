import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({products}) {
    return (
        <Layout title="Home - NextCom">
            <div className="bg-[url('../public/guitar.jpg')] flex justify-center items-center bg-cover full-width h-screen">
                <span className="text-6xl text-white">Welcome to NextCommerce!</span>
            </div>
            <div className="flex justify-between items-center full-width mt-20">
                <Link href="/shop">
                    {/* <div className="w-1/4 border h-[250px] cursor-pointer bg-neutral-900 flex justify-center items-center">
                        <span className="text-3xl text-teal-200">ITEM</span>
                    </div> */}
                    <Image src={products[0].image} width={250} height={250} />
                </Link>
                
                <Link href="/shop">
                    {/* <div className="w-1/4 border h-[250px] cursor-pointer bg-neutral-900 flex justify-center items-center">
                        <span className="text-3xl text-teal-200">ITEM</span>
                    </div> */}
                    <Image src={products[1].image} width={250} height={250} />
                </Link>
                
                <Link href="/shop">
                    {/* <div className="w-1/4 border h-[250px] cursor-pointer bg-neutral-900 flex justify-center items-center">
                        <span className="text-3xl text-teal-200">ITEM</span>
                    </div> */}
                    <Image src={products[2].image} width={250} height={250} />
                </Link>
                
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products?limit=3');
    const products = await res.json();

    return {
        props: {
            products,
        }
    }
}