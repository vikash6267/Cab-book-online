import React, { useState } from "react";
import axios from "axios";

function AddCab() {
  const [formData, setFormData] = useState({
    price: "",
    modelNumber: "",
    vName: "",
    year: "",
    doors: "",
    air: "",
    transmission: "",
    fuel: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("price", formData.price);
    formDataToSend.append("modelNumber", formData.modelNumber);
    formDataToSend.append("vName", formData.vName);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("doors", formData.doors);
    formDataToSend.append("air", formData.air);
    formDataToSend.append("transmission", formData.transmission);
    formDataToSend.append("fuel", formData.fuel);
    formDataToSend.append("image", formData.image);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/admin/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error(error);
      // Optionally, you can show an error message here
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-md"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="modelNumber"
        >
          Model Number:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="modelNumber"
          type="text"
          name="modelNumber"
          value={formData.modelNumber}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="vName"
        >
          Vehicle Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="vName"
          type="text"
          name="vName"
          value={formData.vName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="year"
        >
          Year:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="year"
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="doors"
        >
          Doors:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="doors"
          type="number"
          name="doors"
          value={formData.doors}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="air"
        >
          Air:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="air"
          type="text"
          name="air"
          value={formData.air}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="transmission"
        >
          Transmission:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="transmission"
          type="text"
          name="transmission"
          value={formData.transmission}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fuel"
        >
          Fuel:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fuel"
          type="text"
          name="fuel"
          value={formData.fuel}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Image:
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddCab;
