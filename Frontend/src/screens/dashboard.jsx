import React, { useState } from 'react';
import axios from 'axios';

const DashboardForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    range: '',
    acceleration: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/addcar', formData);
      alert('Data submitted successfully!');
      setFormData({
        name: '',
        image: '',
        description: '',
        price: '',
        range: '',
        acceleration: '',
        category: ''
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit Product Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'image', 'price', 'range', 'acceleration', 'category'].map((field) => (
          <div key={field} className="flex flex-col">
            <label htmlFor={field} className="mb-1 font-medium text-gray-700 capitalize">
              {field}:
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1 font-medium text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DashboardForm;