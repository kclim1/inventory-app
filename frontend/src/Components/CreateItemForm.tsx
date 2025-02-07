import { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeCreateItemForm } from "../store/slices/createItemFormSlice";
import { clearItemDetails } from "../store/slices/itemDetailsSlice";
import { toast } from "sonner";

export const CreateItemForm = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.createItemForm.isOpen);
  const itemDetails = useAppSelector((state) => state.itemDetails);

  // ✅ Local state for form fields
  const [itemName, setItemName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");

  useEffect(() => {
    if (!isOpen) return; // Prevent state updates when form is closed

    if (itemDetails.itemName) {
      setItemName(itemDetails.itemName);
      setDescription(itemDetails.description);
      setPrice(itemDetails.price);
    } else {
      // ✅ Create Mode: Reset the form
      setItemName("");
      setDescription("");
      setPrice("");
    }
  }, [itemDetails, isOpen]); // ✅ Trigger when `itemDetails` or `isOpen` changes

  if (!isOpen) return null; // Prevent rendering when modal is closed

  const backendURL = import.meta.env.VITE_BACKEND_URL ;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { itemName, description, price: Number(price) };
  
    try {
      let response;
      if (itemDetails.id) {
        // ✅ Update existing item
        console.log('put req for ' , itemDetails.id)
        response = await axios.put(`${backendURL}/${itemDetails.id}`, formData);
      } else {
        // ✅ Create new item
        console.log('post req for ' , itemDetails.id)

        response = await axios.post(`${backendURL}`, formData);
      }
  
      // ✅ Check if API response was successful
      if (response.status === 200 || response.status === 201) {
        toast.success(itemDetails.id ? "Item updated successfully!" : "Item created successfully!");
//   use redux to store updated state 
        
      }
  
      // ✅ Reset local state & close modal
      setItemName("");
      setDescription("");
      setPrice("");
  
      dispatch(closeCreateItemForm());
      dispatch(clearItemDetails());
  
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };
  

  return (
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity flex justify-center items-center z-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="font-semibold text-xl mb-4">
          {itemDetails.itemName ? "Edit Item" : "Create Item"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>

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

          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              value={price}
              min="0"
              step="0.01"
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0 || e.target.value === "") setPrice(value);
              }}
              className="border rounded w-full p-2"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
            >
              {itemDetails.itemName ? "Update Item" : "Create Item"}
            </button>

            <button
              type="button"
              onClick={() => {
                dispatch(closeCreateItemForm());
                dispatch(clearItemDetails());
                setItemName("");
                setDescription("");
                setPrice("");
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mx-2 rounded-lg w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
