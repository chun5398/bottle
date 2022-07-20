import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen } from "./screens"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
