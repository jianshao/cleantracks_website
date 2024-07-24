import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import FaqsSection from "./Faqs";

function Home(props) {
  const { selectHome, openRegisterDialog, openLoginDialog } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome, openRegisterDialog]);
  return (
    <Fragment>
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
  openLoginDialog: PropTypes.func.isRequired
};

export default Home;
