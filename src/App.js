import "./styles/common.css";
import React, { useState } from "react";
import Router from "./pages/Router";
import Footer from "../src/components/Footer/Footer";

function App() {
  const [pageOpen, setPageOpen] = useState(false);
  return (
    <>
      {!pageOpen && <Router pageOpen={pageOpen} setPageOpen={setPageOpen} />}
      {pageOpen && <Footer />}
    </>
  );
}

export default App;
