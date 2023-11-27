import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ChatBox from "./components/chatbox";
import DocUpload from "./components/doc-upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:num" element={<ChatBox />} />
        <Route path="/upload" element={<DocUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
