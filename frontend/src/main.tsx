import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Dashboard } from "./Dashboard.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster} from 'sonner'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
        <Toaster position="top-center" />
        <Dashboard />
    </Provider>
  </StrictMode>
);
