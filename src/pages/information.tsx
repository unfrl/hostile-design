import React, { FunctionComponent } from "react";

import { MainLayout } from "../layouts";
import {
  PageHeader,
  ImageTransition,
  SEO,
  InformationCard,
  CountermeasureCard
} from "../components";
import {
  Theme,
  makeStyles,
  Grid,
  Hidden,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

import hostileData from "../data/hostile.yaml";
import { ICategory, ICountermeasure } from "../data";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  cardImage: {
    width: 200,
    float: "right",
    paddingLeft: 8,
    paddingBottom: 8
  },
  cardContent: {
    display: "flex"
  },
  description: {
    display: "inline"
  },
  anchor: {
    display: "block",
    position: "relative",
    top: "-60px",
    visibility: "hidden"
  }
}));

const InformationPage: FunctionComponent = props => {
  const classes = useStyles();

  var categories = hostileData.categories as ICategory[];

  return (
    <MainLayout>
      <SEO title="Information" />
      <PageHeader title="Information" />
      <Grid container spacing={3}>
        {categories.map((category: ICategory, index: number) => {
          return (
            <React.Fragment>
              <InformationCard
                key={index}
                category={category}
                variant={index % 2 == 0 ? "Left" : "Right"}
              />
              {category.countermeasures && (
                <CountermeasureCard
                  categoryTitle={category.title}
                  countermeasures={category.countermeasures}
                />
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </MainLayout>
  );
};

export default InformationPage;
