export type LocationType = {
  lat: number;
  lot: number;
  heading: number;
};

export interface MapResponse {
  lot: number;
  lat: number;
  distance: number;
  filter: string[];
  year: number[];
  codeName: string[];
}
