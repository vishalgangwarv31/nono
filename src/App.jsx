import Home from './Pages/Home'
import './App.css'
import Achievment from './component/achienvment/Achievment'
import Footer from './component/footer/Footer'
import Header from './component/Header/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomeServices from './Pages/homeServices/HomeServices'
import About from './Pages/About/About'
import Product from './Pages/Product/Product'
import Contact from './Pages/contact/Contact'
import Book from './Pages/book/Book'


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/service',
          element: <HomeServices />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/product',
          element: <Product/> 
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/book',
          element: <Book/>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}


export default App
