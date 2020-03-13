import React, { FunctionComponent } from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
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
  submitButton: {
    margin: theme.spacing(2)
  }
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
      <Grid container justify="center" alignItems="center">
        {/* 
          TODO: This map still needs the legend thats in the map, not just the one below the map.
          */}
        <PageHeader
          title={"Hostile.Design"}
          subtitle={
            "The neoliberal city, run by landlords and business interests, is waging a campaign against the unsheltered, the young, and the everyday residents of the city. A weapon in this campaign is the use of hostile architecture, a way of creating space as to limit its potential uses; what this means in effect is that the oppressed and the downtrodden are forced out of city spaces. This tool is meant to combat hostile architecture by raising awareness about the tactics used by the economic and political elite as they attempt to recolonize the city."
          }
        ></PageHeader>
        <Grid item>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            target="_blank"
            href="https://form.jotform.com/shotline/hostiledesign-submission-form"
            rel="noreferrer"
          >
            Submit New Hostile Design
          </Button>
        </Grid>
        <RenderMap />
        <Legend />
      </Grid>
    </MainLayout>
  );
};

export default IndexPage;
