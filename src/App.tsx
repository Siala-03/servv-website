import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { RMS } from './pages/RMS';
import { HMS } from './pages/HMS';
import { Placeholder } from './pages/Placeholder';
// Feature Pages
import { POS } from './pages/features/POS';
import { Inventory } from './pages/features/Inventory';
import { OnlineOrdering } from './pages/features/OnlineOrdering';
import { Analytics } from './pages/features/Analytics';
import { TableManagement } from './pages/features/TableManagement';
import { StaffManagement } from './pages/features/StaffManagement';
// Outlet Pages
import { Restaurants } from './pages/outlets/Restaurants';
import { BarsLounges } from './pages/outlets/BarsLounges';
import { HotelsSpas } from './pages/outlets/HotelsSpas';
import { Cafes } from './pages/outlets/Cafes';
// Other Pages
import { ServvIQ } from './pages/ServvIQ';
import { Contact } from './pages/Contact';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="pricing" element={<Pricing />} />
          <Route path="rms" element={<RMS />} />
          <Route path="hms" element={<HMS />} />

          {/* Feature Routes */}
          <Route path="features/pos" element={<POS />} />
          <Route path="features/inventory" element={<Inventory />} />
          <Route path="features/online-ordering" element={<OnlineOrdering />} />
          <Route path="features/analytics" element={<Analytics />} />
          <Route
            path="features/table-management"
            element={<TableManagement />} />
          
          <Route
            path="features/staff-management"
            element={<StaffManagement />} />
          

          {/* Outlet Routes */}
          <Route path="outlets/restaurants" element={<Restaurants />} />
          <Route path="outlets/bars-lounges" element={<BarsLounges />} />
          <Route path="outlets/hotels-spas" element={<HotelsSpas />} />
          <Route path="outlets/cafes" element={<Cafes />} />

          {/* Other Routes */}
          <Route path="servv-iq" element={<ServvIQ />} />
          <Route path="contact" element={<Contact />} />

          {/* Remaining Placeholders */}
          <Route path="about" element={<Placeholder title="About Us" />} />
          <Route path="careers" element={<Placeholder title="Careers" />} />
          <Route path="blog" element={<Placeholder title="Blog" />} />
          <Route path="help" element={<Placeholder title="Help Center" />} />
          <Route
            path="privacy"
            element={<Placeholder title="Privacy Policy" />} />
          
          <Route
            path="terms"
            element={<Placeholder title="Terms of Service" />} />
          

          {/* Catch-all */}
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}