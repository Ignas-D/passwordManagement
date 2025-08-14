import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar.tsx";

export default function App() {
  return (
      <BrowserRouter>
          <div>
              {<NavBar/>}
          </div>
          <AppRoutes/>
      </BrowserRouter>
  );
}