import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import TrendingGrid from "../components/Trendings/TrendingGrid";

const LandingPage = () => {
  return (
    <Layout>
      <Banner />
      <TrendingGrid />
    </Layout>
  );
};

export default LandingPage;
