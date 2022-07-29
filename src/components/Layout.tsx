import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="">
      {/* <header className="nav">      for navigation
        <nav className="nav">
          <h1>Tasks</h1>
          <Link to="/">Home</Link>
          <Link to="todos">Tasks</Link>
        </nav>
      </header> */}

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
