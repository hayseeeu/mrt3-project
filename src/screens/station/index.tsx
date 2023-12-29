import React from "react";
import Navigation from "../../components/Navigation";
import { useLocation, useParams } from "react-router-dom";
import { stations } from "../../services/stations";
const Station = () => {
  const { stationId, method } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  // const stationId = searchParams.get('stationd_id');
  const matchedStation = stations.find(
    (station) => station.shortName == stationId
  );
  return (
    <div>
      <Navigation />
      <h1> {matchedStation} Station</h1>
    </div>
  );
};

export default Station;
