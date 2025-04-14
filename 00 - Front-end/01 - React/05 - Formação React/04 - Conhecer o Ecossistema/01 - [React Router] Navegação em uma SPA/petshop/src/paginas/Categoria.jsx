import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPosts from "../components/ListaPosts";
import SubCategoria from "./Subcategoria";

const Categoria = () => {
    const { id } = useParams();
    const { url, path } = useRouteMatch();
    const [ subcategorias, setSubCategorias ] = useState([]);

    useEffect(
        () =>
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias);
        }), [id]);

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />

            <ul className="lista-categorias container flex">
                {subcategorias.map((subcategoria, index) => (
                <li
                    className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                    key={index}
                >
                    <Link to={`${url}/${subcategoria}`}>
                        {subcategoria}
                    </Link>
                </li>
                ))}
            </ul>

            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPosts url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    );
};

export default Categoria;
