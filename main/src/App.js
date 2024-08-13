

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarChart from "./pages/bar_chart";
import Tree from "./pages/collapsible-tree";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/treechart" element={<Tree />} />
      </Routes>
    </Router>
  );
}

export default App;
