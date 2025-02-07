import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeDeleteModal } from "../store/slices/deleteModalSlice";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "sonner";

export const DeleteConfirmationModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.deleteModal.isOpen);
  const itemId = useAppSelector((state) => state.deleteModal.itemId);

  if (!isOpen) return null;

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleDelete = async () => {
    if (!itemId) return;

    try {
      console.log('backendUrl + item id here : ',backendURL , itemId)
      await axios.delete(`${backendURL}/${itemId}`);
      toast.success("Item deleted successfully!");
      dispatch(closeDeleteModal());
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Failed to delete item.");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(closeDeleteModal())}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="size-6 text-red-600"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    Delete Item
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this item? This action
                      cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => dispatch(closeDeleteModal())}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
