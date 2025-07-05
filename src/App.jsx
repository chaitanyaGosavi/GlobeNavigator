import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Product from "./Components/Product";
import Pricing from "./Components/Pricing";
import Homepage from "./Components/Homepage";
import MainSection from "./Components/MainSection";
import Cities from "./Components/Cities";
import Countries from "./Components/Countries";
import CityDesc from "./Components/CityDesc";
import { CitiesProvider } from "./Context/CitiesContext";
import Form from "./Components/Form";

function App() {
  return (
    <div className="w-screen h-screen Homepage bg-[#ede7e1]">
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="Product" element={<Product />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route path="App" element={<MainSection />}>
              <Route index element={<Navigate replace to="Cities" />} />
              <Route path="Cities" element={<Cities />} />
              <Route path="Form" element={<Form />} />
              <Route path="Countries" element={<Countries />} />
              <Route path="Cities/:id" element={<CityDesc />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </div>
  );
}

export default App;
