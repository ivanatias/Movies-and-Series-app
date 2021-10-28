import React from "react";
import Layout from "../components/Layout/Layout";
import MoviesGrid from "../components/Movies/MoviesGrid";
import { useRouteQuery } from "../hooks/useRouteQuery";
import { useDebounce } from "../hooks/useDebounce";

const MoviesPage = () => {
  const query = useRouteQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <Layout>
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </Layout>
  );
};

export default MoviesPage;
