import React, { FunctionComponent } from "react";

import { MainLayout } from "../layouts";
import {
  PageHeader,
  ImageTransition,
  SEO,
  InformationCard
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
import { ICategory } from "../data";

import webapp_img from "../assets/undraw_website.svg";
import mobileapp_img from "../assets/undraw_mobileapp_teardown.svg";
import desktopapp_img from "../assets/undraw_desktop.svg";
import undraw_hologram from "../assets/undraw_hologram.svg";
import crossplatform_img from "../assets/undraw_device_sync.svg";

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
            <InformationCard
              category={category}
              variant={index % 2 == 0 ? "Left" : "Right"}
            />
          );
        })}
      </Grid>
    </MainLayout>
  );
};

export default InformationPage;
