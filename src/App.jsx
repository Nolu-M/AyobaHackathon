import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'
import BusinessDashboard from './pages/BusinessDashboard'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/business-dashboard' element={<BusinessDashboard />} />
      </Routes>
    </>
  )
}

export default App
