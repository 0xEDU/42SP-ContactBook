import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import ContactList from './pages/contact-list/ContactList'
import NewContact from './pages/new-contact/NewContact'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ContactList />} />
          <Route path='new-contact' element={<NewContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}