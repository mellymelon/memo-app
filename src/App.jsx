import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Images from './pages/Images'
import Cards from './pages/Cards'
import Login from './pages/Login'
import './App.scss'

function App() {
    return <Router>
        <div className='App'>
            <nav>
                <div className='nav-items'>
                    <NavLink to="/images">Images</NavLink>
                    <NavLink to="/cards">Cards</NavLink>
                </div>
                <NavLink to="/login">Login</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/images" element={<Images />}></Route>
                <Route path="/cards" element={<Cards />}></Route>
            </Routes>
        </div>
    </Router>
}

export default App