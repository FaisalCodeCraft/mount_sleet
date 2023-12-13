
import React from "react";
import NewsHeader from "./components/NewsHeader";
import NewsCard from "./components/NewsCard";
import Footer from "components/Footer";
import NavBarCommon from "components/NavBarCommon";

const News = () => {
  return (
   <React.Fragment>
    <NavBarCommon/>
    <NewsHeader/>
    <NewsCard/>
    <Footer/>
   </React.Fragment>
  );
};

export default News;
