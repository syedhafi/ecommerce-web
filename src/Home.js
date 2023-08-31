import React from "react";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProduct";

const Home = () => {
  return (
    <>
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
