import React from "react";
import Layout from "../components/Layout/Layout";
import TVGrid from "../components/TV/TVGrid";
import { useRouteQuery } from "../hooks/useRouteQuery";

const SeriesPage = () => {
  const query = useRouteQuery();
  const search = query.get("search");

  return (
    <Layout>
      <TVGrid search={search} />
    </Layout>
  );
};

export default SeriesPage;
