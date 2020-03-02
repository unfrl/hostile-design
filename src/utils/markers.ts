import { Icon } from "leaflet";

import hostileData from "../data/hostile.yaml";
import {
  BlueMarker,
  GoldMarker,
  GreenMarker,
  VioletMarker,
  RedMarker,
  GreyMarker,
  BlackMarker,
  OrangeMarker
} from "../components";

import blueMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-blue.png";
import goldMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-gold.png";
import redMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-red.png";
import greenMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-green.png";
import orangeMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-orange.png";
import yellowMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-yellow.png";
import violetMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-violet.png";
import greyMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-grey.png";
import blackMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-black.png";
import { CategoryNames, ICategory } from "../data";

export function determineMarkerIconPath(
  locationType: CategoryNames
): string | undefined {
  for (let typeInfo of hostileData.categories as ICategory[]) {
    if (locationType == typeInfo.name) {
      return determineMarkerIconPathFromColor(typeInfo.icon);
    }
  }
}

export function determineMarkerIconPathFromColor(
  icon: string
): string | undefined {
  switch (icon) {
    case "BLUE":
      return blueMarkerLargeImg;
    case "GOLD":
      return goldMarkerLargeImg;
    case "GREEN":
      return greenMarkerLargeImg;
    case "VIOLET":
      return violetMarkerLargeImg;
    case "RED":
      return redMarkerLargeImg;
    case "GREY":
      return greyMarkerLargeImg;
    case "BLACK":
      return blackMarkerLargeImg;
    case "ORANGE":
      return orangeMarkerLargeImg;
    default:
      return undefined;
  }
}

export function determineMarkerIcon(locationType: string): Icon | undefined {
  for (let typeInfo of hostileData.categories) {
    if (locationType == typeInfo.name) {
      return determineMarkerIconFromColor(typeInfo.icon);
    }
  }
}

export function determineMarkerIconFromColor(icon: string): Icon | undefined {
  switch (icon) {
    case "BLUE":
      return BlueMarker;
    case "GOLD":
      return GoldMarker;
    case "GREEN":
      return GreenMarker;
    case "VIOLET":
      return VioletMarker;
    case "RED":
      return RedMarker;
    case "GREY":
      return GreyMarker;
    case "BLACK":
      return BlackMarker;
    case "ORANGE":
      return OrangeMarker;
    default:
      return undefined;
  }
}
