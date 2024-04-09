import TitlePage from "../../components/TitlePage";


function Favoritos() {
    const pageName: string = "Favoritos";

    return (
        <>
            <TitlePage titlePage={pageName} />
            <p>
                favoritos
            </p>
        </>
    );
}

export default Favoritos;