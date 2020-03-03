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

export const BlueMarker =
  typeof window !== undefined
    ? new Icon({
        iconUrl: blueMarkerLargeImg,
        shadowUrl: shadowImg,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    : null;

export const GoldMarker = new Icon({
  iconUrl: goldMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const RedMarker = new Icon({
  iconUrl: redMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const OrangeMarker = new Icon({
  iconUrl: orangeMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const YellowMarker = new Icon({
  iconUrl: yellowMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const VioletMarker = new Icon({
  iconUrl: violetMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const GreyMarker = new Icon({
  iconUrl: greyMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const BlackMarker = new Icon({
  iconUrl: blackMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const GreenMarker = new Icon({
  iconUrl: greenMarkerLargeImg,
  shadowUrl: shadowImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
