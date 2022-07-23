import Head from "next/head";
import Nav from "./Nav";

const Layout = ({children, title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Nav></Nav>
            <div className="px-40 py-20">
                {children}
            </div>
        </div>
    );
};

export default Layout;