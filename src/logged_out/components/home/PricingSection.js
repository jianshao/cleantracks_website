import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Box, Button, Grid, Typography } from "@mui/material";
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
  const [currSub, setCurrSub] = useState(2);

  const SubCards = [
    {
      type: 1,
      title: "Free",
      features: [
        { key: "Customize Conifg", status: 1 },
        { key: "Automatic Clean", status: 1 },
        { key: "Clear Browsing History", status: 1 },
        { key: "Total 50 Sites", status: 1 },
        { key: "Clear Cookie", status: 0 },
        { key: "Clear Cache", status: 0 },
        { key: "Clear Storage", status: 0 },
      ],
      price: "$0",
      union: "month",
      subscribe: "already is",
      disable: true,
    },
    {
      type: 2,
      title: "Pro",
      features: [
        { key: "Customize Conifg", status: 1 },
        { key: "Automatic Clean", status: 1 },
        { key: "Clear Browsing History", status: 1 },
        { key: "Clear Cookie", status: 1 },
        { key: "Total 100 Sites", status: 1 },
        { key: "Clear Cache", status: 0 },
        { key: "Clear Storage", status: 0 },
      ],
      price: "$3.99",
      union: "month",
      price_id: process.env.REACT_APP_PRICE_ID_BASE,
      subscribe: "subscribe",
    },
    {
      type: 3,
      title: "Super",
      features: [
        { key: "Customize Conifg", status: 1 },
        { key: "Automatic Clean", status: 1 },
        { key: "Clear Browsing History", status: 1 },
        { key: "Clear Cookie", status: 1 },
        { key: "Clear Cache", status: 1 },
        { key: "Clear Storage", status: 1 },
        { key: "Unlimited Sites", status: 1 },
      ],
      price: "$6.99",
      union: "month",
      price_id: process.env.REACT_APP_PRICE_ID_PRO,
      disable: true,
      subscribe: "waiting",
    },
  ];

  function handleSubscribe(price_id) {
    const items = [
      {
        priceId: price_id,
        quantity: 1,
      },
    ];
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.token) {
        console.log("user: ", user);
        // 使用paddle
        if (window.Paddle) {
          window.Paddle.Checkout.open({
            items: items,
            customer: { email: user.email },
          });
        }
        return;
      }
    }
    openLoginDialog();
  }
  useEffect(() => {
    if (process.env.REACT_APP_APP_SECRET) {
      console.log("api ok");
    }
    if (window.Paddle) {
      if (process.env.REACT_APP_PADDLE_ENV) {
        window.Paddle.Environment.set(process.env.REACT_APP_PADDLE_ENV);
      }

      window.Paddle.Initialize({
        token: process.env.REACT_APP_APP_SECRET, // replace with a client-side token
        // prints events to console for debugging
        eventCallback: function (data) {
          console.log("paddle: ", data);
        },
      });
    }

    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.subscription) {
        setCurrSub(2);
      }
    }
  }, []);

  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Subscription
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid container spacing={calculateSpacing(width, theme)}>
          {SubCards.map((element) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                lg={12 / SubCards.length}
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
                  onClick={() => {
                    handleSubscribe(element.price_id);
                  }}
                  disable={element.disable}
                  subscribe={element.subscribe}
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
          paddingTop={15}
          paddingBottom={5}
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
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(PricingSection);
