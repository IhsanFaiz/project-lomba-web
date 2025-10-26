import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './page/WelcomePage.jsx'

function App() {


  return (
    <>
      {/* 
          ===== Atention! =====
          - buat komponen di folder component
          - Buat halaman di folder page
          - Atur routing di App.jsx
          - Tailwind udah bisa dipake
      */}



        <Routes>
          <Route path='/' element={<WelcomePage />} />
          {/* <Route path='masukin path nya semisal: /home' element={masukin element di sini bisa lebih dari satu contoh: <WelcomePage /><Home /> } /> */}
          {/* <Route path='/' element={<WelcomePage />} /> */}
        </Routes>
    </>
  )
}

export default App
