import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    textTransform: "none",
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    borderRadius: 4,
    textTransform: "none",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "40%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme, openRegisterDialog } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  function handleStartTrial() {
    const userStr = localStorage.getItem("user");
    console.log("start trial, ", userStr)
    if (userStr) {
      const user = JSON.parse(userStr);
      console.log("start trial, ", user)
      if (user.token) {        
        console.log("already register");
        return;
      }
    }
    openRegisterDialog();
  }
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box
                  sx={{ flexGrow: 1 }}
                  justifyContent="space-between"
                  className="row"
                >
                  <Grid container>
                    <Grid item xs={6}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                      >
                        <Box mb={4}>
                          <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                            Welcome to CleanTracks
                          </Typography>
                        </Box>

                        <Box mb={2}>
                          <Typography
                            variant={isWidthUpLg ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Effortlessly maintain your privacy with our
                            automatic browser history and cookie cleaning.
                            Experience a cleaner, faster browsing experience.
                          </Typography>
                        </Box>
                        <Box
                          mb={4}
                          display={"flex"}
                          flexDirection={"row"}
                          alignItems={"flex-start"}
                          spacing={2}
                        >
                          <Grid container spacing={2} columns={12}>
                            <Grid item xs={4}>
                              <Button
                                onClick={handleStartTrial}
                                variant="contained"
                                color="primary"
                                className={classes.extraLargeButton}
                                classes={{
                                  label: classes.extraLargeButtonLabel,
                                }}
                              >
                                Start Free Trial
                              </Button>
                            </Grid>
                            <Grid item sx={4}>
                              <Button
                                variant="outlined"
                                color="primary"
                                className={classes.extraLargeButton}
                                classes={{
                                  label: classes.extraLargeButtonLabel,
                                }}
                                xs={{ borderRadius: 4 }}
                                href="/#featrues"
                              >
                                Learn More
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Grid>
                    {/* <Hidden mdDown> */}
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} container>
                      <Grid
                        item
                        xs={6}
                        container
                        direction={"column"}
                        alignItems={"center"}
                      >
                        <Box
                          flex={1}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          height={500}
                        >
                          <Box flex={6}>
                            <img
                              alt="header example"
                              width={176}
                              height={176}
                              src={`${process.env.PUBLIC_URL}/images/main/main1.jpeg`}
                            ></img>
                          </Box>
                          <Box flex={3}>
                            <img
                              alt="header example"
                              width={176}
                              height={176}
                              src={`${process.env.PUBLIC_URL}/images/main/main2.jpeg`}
                            ></img>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        container
                        direction={"column"}
                        alignItems={"center"}
                      >
                        <Grid item>
                          <img
                            alt="header example"
                            width={176}
                            height={176}
                            src={`${process.env.PUBLIC_URL}/images/main/main3.jpeg`}
                          ></img>
                        </Grid>
                        <Grid item>
                          <img
                            alt="header example"
                            width={176}
                            height={176}
                            src={`${process.env.PUBLIC_URL}/images/main/main4.jpeg`}
                          ></img>
                        </Grid>
                      </Grid>

                      {/* <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      /> */}
                    </Grid>
                    {/* </Hidden> */}
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.primary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  openRegisterDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
