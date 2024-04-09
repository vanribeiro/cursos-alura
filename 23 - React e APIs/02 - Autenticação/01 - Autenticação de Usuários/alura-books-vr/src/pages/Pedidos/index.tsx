import TitlePage from "../../components/TitlePage";

function Pedidos() {
    const pageName: string = "Meus Pedidos";

    return (
        <>
            <TitlePage titlePage={pageName} />
            <p>pedidos</p>
        </>
    );
}

export default Pedidos;