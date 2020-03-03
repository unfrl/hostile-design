import React, { FunctionComponent } from "react";
import { Icon } from "leaflet";

import { MarkerIcons } from "../data";

//Used from: https://github.com/pointhi/leaflet-color-markers
import shadowImg from "../assets/leaflet-icons/marker-shadow.png";
// import blueMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-blue.png";
// import goldMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-gold.png";
// import redMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-red.png";
// import greenMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-green.png";
// import orangeMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-orange.png";
// import yellowMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-yellow.png";
// import violetMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-violet.png";
// import greyMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-grey.png";
// import blackMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-black.png";
import { determineMarkerIconPath } from "../utils";
import { Marker, Popup } from "react-leaflet";

export interface ILeafletMarkerProps {
  MarkerIcon: MarkerIcons | undefined;
  lat: number;
  long: number;
  notes: string;
}

const LeafletMarker: FunctionComponent<ILeafletMarkerProps> = props => {
  const { MarkerIcon, lat, long, notes } = props;

  if (typeof window !== "undefined") {
    var icon = new Icon({
      iconUrl: determineMarkerIconPath(MarkerIcon),
      shadowUrl: shadowImg,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    return (
      <Marker icon={icon} position={[lat, long]}>
        <Popup>{notes}</Popup>
      </Marker>
    );
  }
  return null;
};

export default LeafletMarker;
