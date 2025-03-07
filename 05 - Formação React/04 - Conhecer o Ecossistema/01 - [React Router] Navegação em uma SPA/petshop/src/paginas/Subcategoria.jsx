import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/blog.css";
import ListaPosts from "../components/ListaPosts";

const SubCategoria = () => {
  const { subcategoria } = useParams();
  return <ListaPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default SubCategoria;
