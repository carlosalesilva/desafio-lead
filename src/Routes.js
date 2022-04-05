import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./components/pages/details/Details";
import Home from "./components/pages/home/Home";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}