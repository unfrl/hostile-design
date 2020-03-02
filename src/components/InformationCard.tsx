import React, { FunctionComponent } from "react";

import { ICategory } from "../data";
import {
  makeStyles,
  Hidden,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { ImageTransition } from ".";

import webapp_img from "../assets/undraw_website.svg";

const useStyles = makeStyles(theme => ({
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

export interface IInformationCardProps {
  category: ICategory;
  variant: "Left" | "Right";
}

const InformationCard: FunctionComponent<IInformationCardProps> = props => {
  const classes = useStyles();

  var { category, variant } = props;
  var left = variant == "Left";

  return (
    <React.Fragment>
      {left && (
        <Hidden smDown={true}>
          <Grid item md={6}>
            <ImageTransition src={webapp_img} />
          </Grid>
        </Hidden>
      )}

      <Grid item sm={12} md={6}>
        <Card>
          <a className={classes.anchor} id="web"></a>
          <CardHeader
            title={category.friendlyName}
            subheader="blah blah imma subheader"
          />
          <div className={classes.cardContent}>
            <CardContent>
              <Hidden mdUp={true}>
                <CardMedia
                  component="img"
                  className={classes.cardImage}
                  image={webapp_img}
                  alt="web app image"
                />
              </Hidden>
              <Typography className={classes.description}>
                {category.infoEntry}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>

      {left && <br />}

      {!left && (
        <React.Fragment>
          <Hidden smDown={true}>
            <Grid item md={6}>
              <ImageTransition src={webapp_img} />
            </Grid>
          </Hidden>
          <br />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default InformationCard;
