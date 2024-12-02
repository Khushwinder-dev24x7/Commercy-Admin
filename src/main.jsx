import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import Customer from './Components/Customer/Customer.jsx';
import Home from './Components/Home/Home.jsx';
import AddCustomer from './Components/Customer/addCustomer.jsx';

const router = 
createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="customer" element={<Customer />}>
              <Route path="add-customer" element={<AddCustomer />} />
            </Route>
        </Route>
    )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
