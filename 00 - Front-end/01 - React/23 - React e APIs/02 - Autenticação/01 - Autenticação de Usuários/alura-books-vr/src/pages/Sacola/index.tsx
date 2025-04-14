import TitlePage from "../../components/TitlePage";
import Sidebar from "../../components/Sidebar";
import Container from "../../components/Container";

function Sacola() {
    const pageName: string = "Minha sacola";

    return (
        <>
            <TitlePage titlePage={pageName} />
            <Container>
                <Sidebar />
            </Container>
        </>
    );
}

export default Sacola;