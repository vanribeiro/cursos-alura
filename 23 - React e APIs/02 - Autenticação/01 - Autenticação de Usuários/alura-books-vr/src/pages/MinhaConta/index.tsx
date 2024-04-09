import TitlePage from "../../components/TitlePage";
import Sidebar from "../../components/Sidebar";
import Container from "../../components/Container";
import OrdersList from "../../components/OrdersList";

function MinhaConta() {
    const pageName: string = "Minha conta";

    return (
        <>
            <TitlePage titlePage={pageName} />
            <Container>
                <Sidebar />
                <OrdersList />
            </Container>
        </>
    );
}

export default MinhaConta;