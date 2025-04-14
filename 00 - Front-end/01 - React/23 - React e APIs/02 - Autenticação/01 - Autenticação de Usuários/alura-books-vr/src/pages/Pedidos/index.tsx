import Container from "../../components/Container";
import OrdersList from "../../components/OrdersList";
import Sidebar from "../../components/Sidebar";
import TitlePage from "../../components/TitlePage";

function Pedidos() {
    const pageName: string = "Meus Pedidos";

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

export default Pedidos;