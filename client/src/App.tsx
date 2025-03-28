import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import AccountSettings from './Pages/AccountSettings'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
