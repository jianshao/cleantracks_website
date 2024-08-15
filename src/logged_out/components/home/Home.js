import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import FaqsSection from "./Faqs";
import { Helmet } from "react-helmet";

function Home(props) {
  const { selectHome, openRegisterDialog, openLoginDialog } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome, openRegisterDialog]);
  return (
    <Fragment>
      <Helmet>
        <title>Delete Cookies</title>
        <meta name="description" content="Effortlessly safeguard your privacy. This Chrome extension auto-cleans history and cookies for chosen sites, leaving no trace behind—total control, total peace of mind." />
        <meta name="keywords" content="delete cookie, delete history, auto browser cleaner, clear cookies" />
      </Helmet>
      <HeadSection openRegisterDialog={openRegisterDialog} />
      <FeatureSection />
      <FaqsSection />
      <PricingSection openLoginDialog={openLoginDialog} />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default Home;
