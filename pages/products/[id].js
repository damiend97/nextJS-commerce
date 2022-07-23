import Layout from '../../components/Layout';
import Image from 'next/image'
import Link from 'next/link';

const product = ({product}) => {
    return (
        <Layout title={"Shop - " + product.title+ " - NextCom" } >
            <div className="flex">
                <div className="w-1/2">
                    <Image src={product.image} width={300} height={300} />
                </div>
                <div className="w-1/2 text-right">
                    <div className="text-5xl">{product.title}</div>
                    <div className="text-2xl mt-5">{product.description}</div>
                    <div className="text-5xl mt-12 font-bold">{product.price.toFixed(2)}</div>
                    <button className="border border-gray-500 rounded-md px-12 py-3 mt-5">Add To Cart</button>
                </div>
            </div>
            <Link href="/shop"><div className="text-2xl mt-5 w-40 border-gray-500 rounded-md px-5 py-2 border cursor-pointer">Go back...</div></Link>
        </Layout>
        
    );
};

export default product;

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product = await res.json();
    return {
        props: {
            product
        }
    }
}