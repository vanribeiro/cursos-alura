import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import TitlePage from "../../components/TitlePage";


function Favoritos() {
    const pageName: string = "Favoritos";

    return (
        <>
            <TitlePage titlePage={pageName} />
            <Container>
                <Sidebar />
            </Container>
        </>
    );
}

export default Favoritos;