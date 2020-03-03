import React, { FunctionComponent } from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import { ICountermeasure } from "../data";
import {
  makeStyles,
  Card,
  Grid,
  CardHeader,
  Avatar,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  countermeasureItem: {
    marginBottom: theme.spacing(2)
  }
}));

export interface ICountermeasureCardProps {
  categoryTitle: string;
  countermeasures: ICountermeasure[];
}

const CountermeasureCard: FunctionComponent<ICountermeasureCardProps> = props => {
  const classes = useStyles();
  const { categoryTitle, countermeasures } = props;

  var subheaderText = `People have ${
    countermeasures.length > 1 ? "a number of" : ""
  } ways of working around ${categoryTitle}`;

  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Card>
          <CardHeader title="Countermeasures" subheader={subheaderText} />
          <CardContent>
            {countermeasures.map(
              (countermeasure: ICountermeasure, index: number) => {
                return (
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                    className={classes.countermeasureItem}
                  >
                    <Grid item>
                      <Avatar>
                        <PhotoCameraIcon />
                      </Avatar>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        {countermeasure.title}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>{countermeasure.description}</Typography>
                    </Grid>
                  </Grid>
                  //   <Card>
                  //     <CardHeader
                  //       title={countermeasure.title}
                  //       avatar={<PhotoCameraIcon />}
                  //     />
                  //     <CardContent>
                  //       <Typography>{countermeasure.description}</Typography>
                  //     </CardContent>
                  //   </Card>
                );
              }
            )}
          </CardContent>
        </Card>
      </Grid>
      <br />
    </React.Fragment>
  );
};

export default CountermeasureCard;
