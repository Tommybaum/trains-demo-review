import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom"
import Conductors from "./Conductors";
const Trains = ({ token }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const result = await fetch("/api/trains", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await result.json();
      setTrains(data);
    };
    fetchTrains();
  }, []);

  const formatTrain = (train) => {
    return (
      <div key={`Train_${train.id}`}>
        <h2>Train {train.id}</h2>
        <ul>
          <li>{train.color}</li>
          <li>{train.fuelType}</li>
          <li>Year: {train.year}</li>
          <li>Range: {train.range}</li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="navbar">
        <Link to="signIn/conductors">CLick for conductors!</Link>
        <Link to="/stations">Click for Stations!</Link>

      </div>
      <Routes>
        <Route path="signIn/conductors" element={<Conductors />}></Route>
      </Routes>

      <h1>Trains List</h1>
      {trains.map((t) => {
        return formatTrain(t);
      })}
    </>
  );
};

export default Trains;
