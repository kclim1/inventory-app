import { useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeCreateItemForm } from "../store/slices/createItemFormSlice";

export const CreateItemForm = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.createItemForm.isOpen);

  // ✅ Keep useState at the top
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");

  if (!isOpen) return null; // ✅ Hide modal when `isOpen === false`

  const backendURL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { productName, description, price: Number(price) };

    try {
      const response = await axios.post(`${backendURL}/api/items`, formData);
      console.log("Product added:", response.data);

      // ✅ Clear form after submission
      setProductName("");
      setDescription("");
      setPrice("");

      // ✅ Close modal after successful submission
      dispatch(closeCreateItemForm());
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {/* ✅ Translucent Background Overlay (Matches DeleteConfirmationModal) */}
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

      {/* ✅ Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-96">
          <h2 className="font-semibold text-xl mb-4">Add New Product</h2>

          <form onSubmit={handleSubmit}>
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
                  if (value >= 0 || e.target.value === "") setPrice(value);
                }}
                className="border rounded w-full p-2"
                required
              />
            </div>

            {/* Buttons */}
            <div className="buttonsContainer flex justify-end space-x-2">
              {/* Cancel Button */}
              <button
                type="button"
                onClick={() => dispatch(closeCreateItemForm())}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
