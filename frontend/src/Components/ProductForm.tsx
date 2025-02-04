import { useState } from "react";
import axios from "axios";

interface ProductFormProps {
  onSubmit: (data: {
    productName: string;
    description: string;
    price: number;
  }) => void;
}

export const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");

  // Define the backend URL from the environment variables (for Vite)
  const backendURL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert price to number before submitting
    const formData = { productName, description, price: Number(price) };

    try {
      const response = await axios.post(`${backendURL}/api/items`, formData);
      //   remove console log after testing
      console.log("Product added:", response.data);

      // Call the onSubmit function
      onSubmit(formData);

      // Clear form after submission
      setProductName("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 w-sm"
    >
      <h2 className="font-semibold text-xl mb-4">Add New Product</h2>

      {/* Product Name Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>

      {/* Price Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Price:</label>
        <input
          type="number"
          value={price}
          min="0"
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= 0 || e.target.value === "") setPrice(value); // Prevent negative numbers
          }}
          className="border rounded w-full p-2"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
      >
        Submit
      </button>
    </form>
  );
};
