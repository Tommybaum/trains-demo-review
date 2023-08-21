import { useEffect, useState } from "react";
import {Link, Routes, Route} from "react-router-dom"
const Conductors = () => {
  const [conductors, setConductors] = useState([]);

  useEffect(() => {
    const fetchConductors = async () => {
      const result = await fetch("/api/conductors");
      const data = await result.json();
      setConductors(data);
      console.log(data)
    };
    fetchConductors();
  }, []);

  const formatConductors = (conductor) => {
    
    return (
      <div key={`Conductor_${conductor.id}`}>
        <h2>Train {conductor.id}</h2>
        <ul>
          <li>{conductor.name}</li>
          <li>{conductor.yearHired}</li>
          <li>Year: {conductor.trainId}</li>
          <li>Range: {conductor.train}</li>
        </ul>
      </div>
    );
  };

  return (
    <>
    <div className="navbar">
      <Link to="/conductors">CLick for conductors!</Link>
      <Link to="/stations">Click for Stations!</Link>
    </div>
    <h1>Trains List</h1>
      {conductors.map((c) => {
        return formatConductors(c);
      })}
    </>
  );
};

export default Conductors;


// , {
//     headers: {
//       "Authorization" : `Bearer ${token}`
//     }
//   }