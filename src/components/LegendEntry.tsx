import React, { FunctionComponent } from "react";
import { ICategory, CategoryNames } from "../data";
import {
  Grid,
  Card,
  makeStyles,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import WarningIcon from "@material-ui/icons/Warning";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import AirlineSeatLegroomNormalIcon from "@material-ui/icons/AirlineSeatLegroomNormal";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SecurityIcon from "@material-ui/icons/Security";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import greenMarkerIcon from "../assets/leaflet-icons/marker-icon-2x-green.png";
import { determineMarkerIconPath } from "../utils";
import { Link } from "gatsby";

const useStyles = makeStyles(theme => ({
  item: {
    padding: theme.spacing(1)
  },
  title: {
    display: "flex",
    alignItems: "center"
  },
  mapMarker: {
    marginLeft: "10px",
    maxWidth: "20px"
  },
  categoryIconButton: {
    padding: theme.spacing(1)
  }
}));

export interface ILegendEntryProps {
  category: ICategory;
}

const LegendEntry: FunctionComponent<ILegendEntryProps> = props => {
  const classes = useStyles();
  const { category } = props;

  function determineLegendIcon(categoryName: CategoryNames): any {
    switch (categoryName) {
      case CategoryNames.CAMERA:
        return <PhotoCameraIcon />;
      case CategoryNames.SIGNAGE:
        return <WarningIcon />;
      case CategoryNames.SPIKES:
        return <ChangeHistoryIcon />;
      case CategoryNames.BLOCKADE:
        return <ViewModuleIcon />;
      case CategoryNames.BENCH:
        return <AirlineSeatLegroomNormalIcon />;
      case CategoryNames.GHOST_AMENITIES:
        return <VisibilityOffIcon />;
      case CategoryNames.HARDENED_SECURITY:
        return <SecurityIcon />;
      case CategoryNames.SENSORY:
        return <VolumeUpIcon />;
      default:
        return undefined;
    }
  }

  return (
    <Grid item xs={12} className={classes.item}>
      <Card>
        <CardHeader
          avatar={
            <IconButton
              className={classes.categoryIconButton}
              aria-label={`${category.title} information`}
            >
              <Link to={`information/#${category.name}`}>
                <Avatar>{determineLegendIcon(category.name)}</Avatar>
              </Link>
            </IconButton>
          }
          title={
            <span className={classes.title}>
              {category.title}
              <img
                src={determineMarkerIconPath(category.icon)}
                className={classes.mapMarker}
              />
            </span>
          }
          subheader={"blah blah blah"}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {category.legendEntry}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LegendEntry;
