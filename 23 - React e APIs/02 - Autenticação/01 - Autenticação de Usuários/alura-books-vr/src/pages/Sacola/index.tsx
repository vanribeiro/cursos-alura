import TitlePage from "../../components/TitlePage";

function Sacola() {
    const pageName: string = "Minha sacola";

    return (
        <>
            <TitlePage titlePage={pageName} />
            <p>sacola</p>
        </>
    );
}

export default Sacola;