import { useEffect } from "react";
import Main from "../../components/Main";

const pageName = "Home";

function Home() {

    useEffect(() => {
        document.title = `AluraBooks - ${pageName}`
    }, []);

    return (
        <>
            <Main />
        </>
    );
}

export default Home;