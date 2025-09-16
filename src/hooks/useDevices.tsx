import { useCallback, useEffect, useMemo, useState } from "react";
import type { Device } from "../models/device";

export default function useDevices() {
  const [data, setData] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState('all');
  let currentId = 11;

  const getDevicesInfo = async () => {
    const response = await fetch("/data/data.json");
    setLoading(true);
    setLoading(false);

    if (!response.ok) {
      setError("there is something wrong, retry again");
    }

    const data = await response.json();

    setData(data);
  };

  const selectedFilter = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    setSelected(event.target.value)
  }, [])

  const dataDevice = useMemo(() => {
    if(selected !== 'all') {
        return data.filter((res) => res.operator.toLowerCase() === selected)
    }

    return data;
  }, [data, selected])

  useEffect(() => {
    getDevicesInfo();

    const addNewestOperator = setInterval(() => {
      const rsrq = Number((Math.random() * (-3 - -20) + -20).toFixed(1));
      const latMin = -11.0;
      const latMax = 6.0;
      const lngMin = 95.0;
      const lngMax = 141.0;

      const latitude = Number(
        (latMin + Math.random() * (latMax - latMin)).toFixed(6)
      );
      const longitude = Number(
        (lngMin + Math.random() * (lngMax - lngMin)).toFixed(6)
      );

      setData((prev) => [
        ...prev,
        {
          id: currentId++,
          operator: "telkomsel",
          rsrq: rsrq,
          lat: latitude,
          lng: longitude,
        },
      ]);
    }, 3000);

    return () => clearInterval(addNewestOperator);
  }, [currentId]);

  return {
    dataDevice,
    loading,
    error,
    selectedFilter
  };
}
