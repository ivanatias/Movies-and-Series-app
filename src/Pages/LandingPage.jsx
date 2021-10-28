import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import TrendingGrid from "../components/Trendings/TrendingGrid";
import DailyTrendings from "../components/Trendings/DailyTrendings";

const LandingPage = () => {
  return (
    <Layout>
      <Banner />
      <TrendingGrid />
      <DailyTrendings />
    </Layout>
  );
};

export default LandingPage;
