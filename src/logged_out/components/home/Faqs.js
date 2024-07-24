import { Box, Grid, Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    textTransform: "none",
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
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
  wrapper: {
    position: "relative",
    // backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
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
});

function FaqsSection(props) {
  const { classes } = props;

  const Faqs = [
    {
      question: "What is CleanTracks?",
      answer:
        "CleanTracks is a chrome extension that automatically cleans your browser history and cookies, ensuring a private and efficient browsing experience.",
    },
    {
      question: "Do I need a subscription to use CleanTracks?",
      answer:
        "Yes, users need to subscribe to access the full features of CleanTracks.",
    },
    {
      question: "How does the automatic cleaning work?",
      answer:
        "Once installed, CleanTracks allows you to set schedules for automatic cleaning of your browsing history and cookies.",
    },
    {
      question: "Can I customize the cleaning settings?",
      answer:
        "Absolutely. CleanTracks offers customizable settings to tailor the cleaning process to your preferences.",
    },
    {
      question: "Is my data safe with CleanTracks?",
      answer:
        "Yes, CleanTracks is designed with privacy in mind. Your data is handled securely and is never shared with third parties.",
    },
    {
      question: "How do I install CleanTracks?",
      answer:
        "Simply visit the Chrome Web Store, search for CleanTracks, and click 'Add to Chrome'.",
    },
  ];
  return (
    <div className={classNames("lg-p-top", classes.wrapper)}>
      <div className={classNames("container-fluid", classes.container)}>
        <Box flexDirection={"column"} columnGap={4}>
          <Box flex={1}>
            <Typography variant="h3" className="lg-mg-bottom">
              Frequently Asked Questions
            </Typography>
          </Box>
          <Box flexDirection={"column"}>
            <Grid container spacing={4}>
              {Faqs.map((element) => {
                return (
                  <Grid item xs={6} key={element.question}>
                    <Typography variant="h5">{element.question}</Typography>
                    <Typography variant="h12">{element.answer}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
}

FaqsSection.prototype = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(FaqsSection);
