import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { publicIpv4 } from "public-ip";
import { useIpStore } from "../store/useIpStore";
import { LatLon, useCurrentLocationStore } from "../store/currentLocationStore";
import { fetchIpLocation } from "../utilities/requests/fetchIpLocation";

interface Props {
  setPickedLocation: Dispatch<SetStateAction<LatLon | undefined>>;
}

export default function MapLogic(props: Props) {
  const { setPickedLocation } = props;

  const ip = useIpStore((x) => x.ip);
  const setIp = useIpStore((x) => x.setIp);
  const setCurrentLocation = useCurrentLocationStore(
    (x) => x.setCurrentLocation
  );

  const map = useMap();

  useEffect(() => {
    publicIpv4().then((ip) => setIp(ip));

    map.addEventListener("click", (e) => {
      setPickedLocation({ lat: e.latlng.lat, lon: e.latlng.lng });
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (!ip) return;
      const location = await fetchIpLocation(ip);

      if (!location) return;
      setCurrentLocation(location);
      map.setView([location.lat, location.lon], 11);
    })();
  }, [ip]);

  return null;
}
