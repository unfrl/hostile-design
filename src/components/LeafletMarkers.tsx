import React, { FunctionComponent } from "react";
import { Icon } from "leaflet";
import { Marker } from "react-leaflet";

import shadowImg from "../assets/leaflet-icons/marker-shadow.png";

import blueMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-blue.png";
import goldMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-gold.png";
import redMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-red.png";
import greenMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-green.png";
import orangeMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-orange.png";
import yellowMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-yellow.png";
import violetMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-violet.png";
import greyMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-grey.png";
import blackMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-black.png";

export const BlueTestMarker: FunctionComponent = props => {
  if (typeof window !== "undefined") {
    return (
      <React.Fragment>
        {
          new Icon({
            iconUrl: blueMarkerLargeImg,
            shadowUrl: shadowImg,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        }
      </React.Fragment>
    );
  }
  return null;
};
