import React, { FunctionComponent } from "react";
import { makeStyles, CardHeader, Card, Grid, Paper } from "@material-ui/core";
import hostileData from "../data/hostile.yaml";
import { LegendEntry } from ".";
import { ICategory } from "../data";

const useStyles = makeStyles(theme => ({
  // header: {
  //     width: "100%",
  //     textAlign: "center",
  //     marginTop: theme.spacing(4),
  //     marginBottom: theme.spacing(),
  //     fontSize: "2.5rem",
  //     [theme.breakpoints.up("sm")]: {
  //         fontSize: "3rem",
  //     },
  // },
  legend: {
    width: "100%",
    background: theme.palette.background.default
  },
  entry: {
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Legend: FunctionComponent = props => {
  const classes = useStyles();
  return (
    <Card className={classes.legend}>
      <CardHeader title="Legend" subheader="Click on each entry to see more" />

      <Grid>
        {hostileData.categories.map((category: ICategory, index: number) => {
          return <LegendEntry category={category} key={index} />;
        })}
      </Grid>
    </Card>
  );
};

export default Legend;
