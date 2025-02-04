// src/Dashboard.tsx
import { ProductCard } from "./Components/ProductCard";
import { CreateItemButton } from "./Components/CreateItemButton";
import { ProductForm } from "./Components/ProductForm";


export const Dashboard = () => {
  return (
    <div className=" screenContainer bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-semibold">Product Inventory Dashboard</h1>
      </header>

      {/* Main Content Area */}
      <main className="p-6">
        <CreateItemButton/>
        <ProductCard/>
        <ProductForm/>
      </main>
    </div>
  );
};
