import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import PirateForm from "./components/PirateForm/PirateForm";
import PirateList from "./components/PirateList/PirateList";
import PirateProfile from "./components/PirateProfile/PirateProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/pirates" />}></Route>
          <Route path="/pirate/new" element={<PirateForm />} />
          <Route element={<PirateList />} path="/pirates" />
          <Route path="/pirate/:id" element={<PirateProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
