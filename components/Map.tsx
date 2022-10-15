import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import MapLogic from "./MapLogic";
import { LatLon, useCurrentLocationStore } from "../store/currentLocationStore";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@mui/material";

interface Props {
  pickedPosition: LatLon | undefined;
  setPickedLocation: Dispatch<SetStateAction<LatLon | undefined>>;
}

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: iconShadow.src,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map(props: Props) {
  const { pickedPosition, setPickedLocation } = props;

  const currentLocation = useCurrentLocationStore((x) => x.currentLocation);

  function handleMarkerRemove() {
    setTimeout(() => setPickedLocation(undefined), 0);
  }

  return (
    <>
      <MapContainer
        center={[0, 0]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-64 w-full"
      >
        <MapLogic setPickedLocation={setPickedLocation} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pickedPosition ? (
          <Marker
            position={[pickedPosition?.lat || 0, pickedPosition?.lon || 0]}
          >
            <Popup>
              <Button color="error" onClick={handleMarkerRemove}>
                remove
              </Button>
            </Popup>
          </Marker>
        ) : null}
      </MapContainer>
    </>
  );
}
