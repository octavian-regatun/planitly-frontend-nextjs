import create from "zustand";

export interface LatLon {
  lat: number;
  lon: number;
}

interface CurrentLocationStore {
  currentLocation?: LatLon;
  setCurrentLocation: (currentLocation: LatLon) => void;
}

export const useCurrentLocationStore = create<CurrentLocationStore>((set) => ({
  currentLocation: undefined,
  setCurrentLocation: (currentLocation) => set(() => ({currentLocation})),
}));
