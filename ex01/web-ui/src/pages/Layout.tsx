import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Contact List</Link>
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
