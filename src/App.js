import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <h1> App de tareas</h1>
        <Link to="/" className="text-blue-500 hover:text-blue-800"> Inicio</Link>
        <Link to="/create" className="text-gray-400 cursor-not-allowed" >Crear una nueva</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
