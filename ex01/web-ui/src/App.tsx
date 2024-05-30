import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/home/Home'
import NewContact from './pages/new-contact/NewContact'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='new-contact' element={<NewContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
