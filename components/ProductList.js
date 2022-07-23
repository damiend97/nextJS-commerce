import Image from 'next/image'
import Link from 'next/link';

const ProductList = ({products}) => {
    return (
        <div className="mt-5 flex flex-wrap pt-12">
            {products.map(product => {
                return (
                    <Link href="/products/[id]" as={`/products/${product.id}`}>
                        <div className="w-1/3 cursor-pointer">
                            <div key={product.id} className="border h-[350px] m-3 p-5 spy-10">
                                <div className="text-center">
                                    <Image src={product.image} width={150} height={150} />
                                </div>
                                <div className="mt-12 mx-5 text-center">{product.title}</div>
                                <div className="mt-2 text-center font-bold">{product.price.toFixed(2)}</div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default ProductList;