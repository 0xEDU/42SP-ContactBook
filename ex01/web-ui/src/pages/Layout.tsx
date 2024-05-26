import { Outlet, Link } from 'react-router-dom';
import './Layout.css'

export default function Layout() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/new-contact'>Add Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
