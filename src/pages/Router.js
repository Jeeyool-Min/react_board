import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import List from "./List/List";
import Detail from "./Detail/Detail";
import New from "./New/New";

function Router() {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/new" element={<New />} />
    </Routes>
  </BrowserRouter>
  );
}

export default Router;