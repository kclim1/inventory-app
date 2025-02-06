import { CreateItemButton } from "./Components/CreateItemButton";
import { CreateItemForm } from "./Components/CreateItemForm";
import { DeleteConfirmationModal } from "./Components/DeleteConfirmationModal";
// import { ItemDisplayContainer } from "./Components/ItemDisplayContainer";
import { ItemCard } from "./Components/ItemCard";

export const Dashboard = () => {
  return (
    <div className=" screenContainer bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-semibold">Product Inventory Dashboard</h1>
      </header>

      {/* Main Content Area */}
      <main className="mainContainer p-6 flex flex-col">
        <div className="flex justify-end  my-2">
          <CreateItemButton />
        </div>
        
        {/* will only appear if state is True. */}
        <CreateItemForm />
        <DeleteConfirmationModal />
        <h2>All Items:</h2>
       {/* place item container below  */}
       {/* <ItemDisplayContainer/> */}
       <ItemCard
            itemName="Test Product"
            description="This is a sample description."
            price={49.99}
          />
      </main>
    </div>
  );
};
