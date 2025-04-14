import { ReactNode, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import { Outlet } from "react-router-dom";
import Tags from "../../components/Tags";
import { localhost } from "../../service/api";

interface ILayoutDefault {
    children?: ReactNode
} 

function LayoutDefault({ children } : ILayoutDefault) {
    const [tagList, setTagList] = useState<Array<string>>([]);
    useEffect(() => {
        
        fetch(`${localhost}/tags`)
        .then(res => res.json())
        .then(data => setTagList(data))
        .catch(error => error);
        
    }, []);

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