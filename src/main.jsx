import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Departments from './components/Departments/Departments';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import dataLoader from './components/Utilities/Utilities';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />,
        loader: () => fetch(`https://api.itbook.store/1.0/new`)
      },
      {
        path: 'service/:serviceId',
        element: <ServiceDetails />,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.serviceId}`)
      },
      {
        path: 'departments',
        element: <Departments />
      },
      {
        path: 'doctors',
        element: <Doctors />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: 'doctor/:doctorId',
        element: <DoctorDetails />,
        loader: ({params}) => dataLoader(params.doctorId)
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <ContactUs />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
