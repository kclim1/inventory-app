import { ItemCard } from "./ItemCard"

export const ItemDisplayContainer = ()=>{
    return(
        <div className="itemContainer flex flex-col bg-sky-200 p-4 overflow-y-auto my-2 h-screen">
           {/* style={{ height: "calc(100vh - 160px)" }}>
          style={{ height: "100vh" }}> 
            */}
           <ItemCard/>
          {/* 100vh minus estimated header, buttons, and margins */}
          
          {/* Placeholder for item list */}
          {/* <ItemCard /> will be mapped here later */}
        </div>
    )
}