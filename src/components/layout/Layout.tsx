import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-navy">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>);

}