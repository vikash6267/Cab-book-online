import React, { useState, useEffect } from "react";
import axios from "axios";

function AllCab() {
  const [cabs, setCabs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/admin/get"
        );
        setCabs(response.data); // Assuming the data returned is an array of cab objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cabs.map((cab, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">{cab.vName}</h2>
          <p className="text-gray-600 mb-2">Price: {cab.price}</p>
          <p className="text-gray-600 mb-2">Model Number: {cab.modelNumber}</p>
          <p className="text-gray-600 mb-2">Year: {cab.year}</p>
          <p className="text-gray-600 mb-2">Doors: {cab.doors}</p>
          <p className="text-gray-600 mb-2">Air: {cab.air}</p>
          <p className="text-gray-600 mb-2">Transmission: {cab.transmission}</p>
          <p className="text-gray-600 mb-2">Fuel: {cab.fuel}</p>
          <p className="text-gray-600 mb-2">Seats: {cab.seats}</p>
          <img
            src={cab.image}
            alt="Cab Thumbnail"
            className="w-full rounded-md"
          />
        </div>
      ))}
    </div>
  );
}

export default AllCab;
