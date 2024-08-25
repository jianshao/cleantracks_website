import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Button, Stack } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import CheckIcon from "@mui/icons-material/Check";
import { Close } from "@mui/icons-material";

const styles = (theme) => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.main}80`,
    borderRadius: theme.shape.borderRadius * 2,
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius * 2,
    // backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  highlightedTitle: {
    color: "#f09a1a",
  },
});

// price table包括3个部分：title、price、features、订阅控制信息
function PriceCard(props) {
  const { classes, theme, title, pricing, features, highlighted, onClick, disable, subscribe } =
    props;

  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
      <Box mb={2}>
        <Typography
          textAlign={"center"}
          variant={highlighted ? "h4" : "h5"}
          className={classes.title}
        >
          {title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography textAlign={"center"} variant={highlighted ? "h3" : "h4"}>
          {pricing}
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Box display="flex" alignItems="center" mb={1} key={index}>
          {feature.status ? (
            <CheckIcon
              style={{
                color: theme.palette.primary.dark,
              }}
            />
          ) : (
            <Close
              style={{
                color: "#d32f2f",
              }}
            />
          )}

          <Box ml={1}>
            <Typography
              // className={highlighted ? "#f09a1a" : null}
              variant={highlighted ? "h6" : "body1"}
            >
              {feature.key}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box mb={2} paddingTop={5}>
        <Stack
          display={"flex"}
          justifyContent={"center"}
          alignContent={"stretch"}
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 5 }}
            disabled={disable}
            onClick={onClick}
          >
            {subscribe}
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(PriceCard);
