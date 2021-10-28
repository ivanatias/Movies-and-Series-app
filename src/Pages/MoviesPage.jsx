import React from "react";
import Layout from "../components/Layout/Layout";
import MoviesGrid from "../components/Movies/MoviesGrid";
import { useRouteQuery } from "../hooks/useRouteQuery";

const MoviesPage = () => {
  const query = useRouteQuery();
  const search = query.get("search");

  return (
    <Layout>
      <MoviesGrid search={search} />
    </Layout>
  );
};

export default MoviesPage;
