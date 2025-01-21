import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppStateProvider } from "./context/useStateContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <AppStateProvider>
      <App />
    </AppStateProvider>
);
