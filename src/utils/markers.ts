import { Icon } from "leaflet";

import hostileData from "../data/hostile.yaml";

//Stolen from: https://github.com/pointhi/leaflet-color-markers
import blueMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-blue.png";
import goldMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-gold.png";
import redMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-red.png";
import greenMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-green.png";
import orangeMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-orange.png";
import yellowMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-yellow.png";
import violetMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-violet.png";
import greyMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-grey.png";
import blackMarkerLargeImg from "../assets/leaflet-icons/marker-icon-2x-black.png";
import { CategoryNames, ICategory, MarkerIcons } from "../data";

export function determineMarkerIconFromCategory(
  locationType: CategoryNames
): MarkerIcons | undefined {
  for (let typeInfo of hostileData.categories as ICategory[]) {
    if (locationType == typeInfo.name) {
      return typeInfo.icon;
    }
  }
}

export function determineMarkerIconPath(
  markerIcon: MarkerIcons | undefined
): string | undefined {
  switch (markerIcon) {
    case MarkerIcons.BLUE:
      return blueMarkerLargeImg;
    case MarkerIcons.GOLD:
      return goldMarkerLargeImg;
    case MarkerIcons.GREEN:
      return greenMarkerLargeImg;
    case MarkerIcons.VIOLET:
      return violetMarkerLargeImg;
    case MarkerIcons.RED:
      return redMarkerLargeImg;
    case MarkerIcons.GREY:
      return greyMarkerLargeImg;
    case MarkerIcons.BLACK:
      return blackMarkerLargeImg;
    case MarkerIcons.ORANGE:
      return orangeMarkerLargeImg;
    default:
      return undefined;
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
