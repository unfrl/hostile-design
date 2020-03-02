import React, { FunctionComponent } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import { SEO, GreenMarker } from "../components";
import { MainLayout } from "../layouts";
import locationData from "../assets/hostile.yaml";
import { Icon } from "leaflet";

const useStyles = makeStyles(theme => ({
  //   infoDescription: {
  //     textAlign: "center",
  //     [theme.breakpoints.up("md")]: {
  //       textAlign: "left"
  //     }
  //   },
}));

enum LocationTypes {
  NA,
  Bench,
  Camera
}

const IndexPage: FunctionComponent = () => {
  const classes = useStyles();
  function determineMarkerType(stringType: string): LocationTypes {
    switch (stringType) {
      case "CAMERA":
        return LocationTypes.Camera;
      case "BENCH":
        return LocationTypes.Bench;
      default:
        return LocationTypes.NA;
    }
  }

  return (
    <MainLayout>
      <SEO />
      <Grid container>
        <Map
          center={[40.7599456, -111.9029772]}
          zoom={13}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {locationData.locations.map(
            (
              info: {
                type: string;
                lat: number;
                long: number;
                notes: string;
              },
              index: number
            ) => {
              const { type, lat, long, notes } = info;
              console.log(info);
              var markerType = determineMarkerType(type);
              return (
                <Marker icon={GreenMarker} key={index} position={[lat, long]}>
                  <Popup>{notes}</Popup>
                </Marker>
              );
            }
          )}
          {/* <Marker position={[40.7599456, -111.9029772]}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker> */}
        </Map>
      </Grid>
    </MainLayout>
  );
};

export default IndexPage;
