import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Customer from './Components/Customer/Customer.jsx'
import Home from './Components/Home/Home.jsx'
import AddCustomer from './Components/Customer/addCustomer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path ="/" element ={<App/>}>
              <Route index element={<Home />}/>
              <Route path='customer' element ={<Customer/>}>
                  <Route path='add-customer' element={<AddCustomer/>}/>
              </Route>
          </Route>
      </Routes>   
    </Router>
  </StrictMode>,
)
