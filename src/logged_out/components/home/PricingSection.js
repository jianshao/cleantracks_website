import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import useWidth from "../../../shared/functions/useWidth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function PricingSection(props) {
  const { classes, theme, openLoginDialog } = props;
  const width = useWidth();
  // const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [currSub, setCurrSub] = useState(1);

  const SubCards = [
    {
      type: 1,
      title: "Free Trial",
      features: ["7 days", "Customize Conifg", "Automatic Clean"],
      price: "$0",
      union: "month",
    },
    {
      type: 2,
      title: "Monthly",
      features: ["Whole Month", "Customize Conifg", "Automatic Clean"],
      price: "$3.99",
      union: "month",
    },
    {
      type: 3,
      title: "Yearly",
      features: ["One Year", "Customize Conifg", "Automatic Clean"],
      price: "44.99",
      union: "year",
    },
  ];

  function handleSubscribe() {
    const url = "https://cleantracks.lemonsqueezy.com/buy/c4754107-8056-4f84-a9ca-f0e6826efdb9"
    const userStr = localStorage.getItem("user")
    if (userStr) {
      const user = JSON.parse(userStr)
      if (user.token) {
        window.open(url + `?checkout[custom][uid]=${user.uid}`, "_blank")
        return
      }
    }
    openLoginDialog()
  }
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.subscription) {
        setCurrSub(user.subscription);
      }
    }
  });
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Subscription
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width, theme)}
          className={classes.gridContainer}
        >
          {SubCards.map((element) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                className={
                  element.type === currSub
                    ? classes.cardWrapperHighlighted
                    : classes.cardWrapper
                }
                data-aos="zoom-in-up"
                key={element.title}
              >
                <PriceCard
                  highlighted={element.type === currSub ? true : false}
                  title={element.title}
                  pricing={
                    <span>
                      {element.price}
                      <Typography display="inline">
                        {" "}
                        / {element.union}
                      </Typography>
                    </span>
                  }
                  features={element.features}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={5}
          backgroundColor={"#e7f2ff"}
        >
          <Box flex={1} paddingBottom={1}>
            <Typography variant="h4">Subscribe to CleanTracks</Typography>
          </Box>
          <Box flex={1} paddingBottom={2}>
            <Typography variant="h6">
              Unlock the full potential of CleanTracks with a subscription.
              Enjoy seamless, automatic cleaning of your browser history and
              cookies.
            </Typography>
          </Box>
          <Box flex={1} paddingBottom={1}>
            <Button
              sx={{ textTransform: "none", borderRadius: 4 }}
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={handleSubscribe}
            >
              Subscribe Now
            </Button>
          </Box>
          <Box flex={1} paddingBottom={3}>
            <Typography variant="h8">Already have an account?</Typography>
            <Button sx={{ textTransform: "none" }} variant="text">
              Sign in
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(PricingSection);
