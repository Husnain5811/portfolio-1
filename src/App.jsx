import React from 'react'
import Hero from './Pages/hero/Hero'
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./routes/ProjectPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
  )
}

export default App;