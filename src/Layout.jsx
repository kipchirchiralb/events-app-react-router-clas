import { Link, Outlet } from "react-router-dom";
export default function Layout() {
    // context data - loged in id
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services"> Services </Link>
        <Link to="/dashboard/50">Dashboard</Link>
      </nav>
      <main>
        {/* where other page elements will be rendered */}
        <Outlet />
      </main>
    </div>
  );
}
