import "./App.css";
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import CoursePage from "./components/CoursePage";
import NewAssignment from "./components/NewAssignment";

export const AppContext = createContext(null);
const App = () => {
  const [uploadedData, setUploadedData] = useState(null);
  return (
    <AppContext.Provider value={(uploadedData, setUploadedData)}>
      <div className="App">
        <Routes>
          <Route path="/" element={<CoursePage />} />
          <Route path="new-assignment" element={<NewAssignment />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
