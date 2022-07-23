import Link from "next/link";

const Nav = () => {
    return (
        <ul className="flex px-40 py-12 bg-neutral-800">
            <Link href="/"><li className="mr-5 py-2 px-5 rounded border text-white border-white cursor-pointer">Home</li></Link>
            <Link href="/shop"><li className="mr-5 py-2 px-5 rounded border text-white border-white cursor-pointer">Shop</li></Link>
            <div className="text-white text-3xl ml-auto">NextCommerce</div>
        </ul>
    );
};

export default Nav;