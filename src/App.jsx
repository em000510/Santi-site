import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'   
import HomePage from './pages/HomePage'
import FamilyPage from './pages/FamilyPage'
import GamePage from './pages/GamePage'

export default function App() {
  const base = import.meta.env.BASE_URL
  return (
    <BrowserRouter basename={base}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <Footer />    
    </BrowserRouter>
  )
}
