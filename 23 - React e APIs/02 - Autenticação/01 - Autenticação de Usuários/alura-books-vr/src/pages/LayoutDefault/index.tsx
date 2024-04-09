import { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import { Outlet } from "react-router-dom";

interface ILayoutDefault {
    children?: ReactNode
} 

function LayoutDefault({ children } : ILayoutDefault) {
    return (
        <>
            <Header />
            <Outlet />
            {children}
            <Newsletter />
            <Footer />
        </>
    );
}

export default LayoutDefault;