import { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import { Outlet } from "react-router-dom";
import Tags from "../../components/Tags";
import { tagList } from "../../mock/data";

interface ILayoutDefault {
    children?: ReactNode
} 

function LayoutDefault({ children } : ILayoutDefault) {
    return (
        <>
            <Header />
            <Outlet />
            {children}
            <Tags listOfTags={tagList} />
            <Newsletter />
            <Footer />
        </>
    );
}

export default LayoutDefault;