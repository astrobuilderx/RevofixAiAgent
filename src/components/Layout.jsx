import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-[rgb(247,249,252)]">
      <Sidebar />
      <main className="flex-1 ml-[240px] p-6 lg:p-10 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
