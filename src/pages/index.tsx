import React, { FunctionComponent } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";

import { SEO, PageHeader, Legend, LeafletMarker } from "../components";
import { MainLayout } from "../layouts";
import hostileData from "../data/hostile.yaml";
import { determineMarkerIconFromCategory } from "../utils";
import { ILocation } from "../data";

import "../styles/leaflet.css";

const useStyles = makeStyles(theme => ({
  //   infoDescription: {
  //     textAlign: "center",
  //     [theme.breakpoints.up("md")]: {
  //       textAlign: "left"
  //     }
  //   },
}));

const IndexPage: FunctionComponent = () => {
  const classes = useStyles();

  function RenderMap() {
    if (typeof window !== "undefined") {
      //Needed to get 2-finger scrolling when on mobile
      L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

      return (
        <Map
          gestureHandling={true}
          center={[40.7599456, -111.9029772]}
          zoom={13}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {hostileData.locations.map((info: ILocation, index: number) => {
            const { type, lat, long, notes } = info;
            var markerIcon = determineMarkerIconFromCategory(type);
            return (
              <LeafletMarker
                MarkerIcon={markerIcon}
                lat={lat}
                long={long}
                key={index}
                notes={notes}
              ></LeafletMarker>
            );
          })}
        </Map>
      );
    }
    return null;
  }

  return (
    <MainLayout>
      <SEO />
      <Grid container>
        {/* 
          TODO: This map still needs the legend thats in the map, not just the one below the map.
          */}
        <PageHeader
          title={"Hostile.Design"}
          subtitle={
            "Ethical butcher readymade pitchfork ramps trust fund artisan vaporware bitters you probably haven't heard of them shoreditch. Beard cliche crucifix art party artisan vegan. YOLO lomo subway tile fashion axe, shaman poke mixtape kogi food truck unicorn yr ramps single-origin coffee. Kombucha tumblr salvia hoodie food truck actually messenger bag woke tumeric swag single-origin coffee pinterest."
          }
        ></PageHeader>
        <RenderMap />
        <Legend />
      </Grid>
    </MainLayout>
  );
};

export default IndexPage;
