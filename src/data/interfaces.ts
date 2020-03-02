export enum CategoryNames {
  CAMERA = "CAMERA",
  SIGNAGE = "SIGNAGE",
  SPIKES = "SPIKES",
  BLOCKADE = "BLOCKADE",
  BENCH = "BENCH",
  GHOST_AMENITIES = "GHOST_AMENITIES",
  HARDENED_SECURITY = "HARDENED_SECURITY",
  SENSORY = "SENSORY"
}

export enum MarkerIcons {
  BLUE = "BLUE",
  GOLD = "GOLD",
  GREEN = "GREEN",
  VIOLET = "VIOLET",
  RED = "RED",
  GREY = "GREY",
  BLACK = "BLACK",
  ORANGE = "ORANGE"
}

//This is the expected structure of the data in hostile.yaml under the 'categories' list
export interface ICategory {
  name: CategoryNames;
  friendlyName: string;
  icon: MarkerIcons;
  legendEntry: string;
  infoEntry: string;
}

//This is the expected structure of the data in hostile.yaml under the 'locations' list
export interface ILocation {
  type: CategoryNames;
  long: number;
  lat: number;
  notes: string;
}
