import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'
import BusinessDashboard from './pages/BusinessDashboard'
import AboutBusiness from './pages/AboutBusiness'
import AdManagement from './pages/AdManagement'
import BusinessAnalytics from './pages/BusinessAnalytics'
import BusinessChat from './pages/BusinessChat'
import BusinessForum from './pages/BusinessForum'


function App() {
  

  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/business-dashboard' element={<BusinessDashboard />} />
        <Route path='/about-business' element={<AboutBusiness />} />
        <Route path='/ad-management' element={<AdManagement />} />
        <Route path='/business-analytics' element={<BusinessAnalytics />} />
        <Route path='/business-chat' element={<BusinessChat />} />
        <Route path='/business-forum' element={<BusinessForum />} />
        
      </Routes>
    </div>
  )
}

export default App
