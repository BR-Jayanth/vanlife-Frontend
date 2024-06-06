import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes, Link, Navigate, redirect } from 'react-router-dom';
import { Home } from './Pages/Home/Home.jsx';
import { About } from './Pages/About/About.jsx';

import { Vans, loader as vansLoader } from './Pages/Vans/Vans.jsx';
// import "./server.js"
import { VanDetails, loader as vanDetailsLoader } from './Pages/VanDetails/VanDetails.jsx';
import { Layout } from './component/Layout/Layout.jsx';
import { Hostlayout, loader as hostLayoutLoader } from './component/Hostlayout/Hostlayout.jsx';
import { VansList, loader as vansListLoader } from './Pages/Host/vans/VansList/VansList.jsx';
import { VansListDetails, loader as vansListDetailsLoader } from './Pages/Host/vans/VansListDetails/VansListDetails.jsx';
import { VansDetailContent } from './Pages/Host/vans/VansDetailContent/VansDetailContent.jsx';
import { VansPricing } from './Pages/Host/vans/VansPricing/VansPricing.jsx';
import { VansPhotos } from './Pages/Host/vans/VansPhotos/VansPhotos.jsx';
import { PageNotFound } from './Pages/PageNotFound/PageNotFound.jsx';
import { Error } from './component/Error/Error.jsx';
import { Login, loader as loginLoader, action as loginAction } from './Pages/Login/Login.jsx';
import { requireAuth } from './utils.js';
import { HostDashboard ,loader as HostDashboardLoader} from './Pages/Host/HostDashboard/HostDashboard.jsx';
import { HostIncome } from './Pages/Host/HostIncome/HostIncome.jsx';
import { HostReview } from './Pages/Host/HostReview/HostReview.jsx';
function App() {

  const routes = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Layout />}  errorElement={<Error />}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
      <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path='vans/:id' element={<VanDetails />} loader={vanDetailsLoader} />

      <Route path='host' element={<Hostlayout />} loader={hostLayoutLoader}  errorElement={<Error />} >
        <Route index element={<HostDashboard/>} loader={HostDashboardLoader} />
        <Route path='income' element={<HostIncome/>} />
        <Route path='reviews' element={<HostReview />} />
        <Route path='vans' element={<VansList />} loader={vansListLoader} />

        <Route path='vans/:id' element={<VansListDetails />} loader={vansListDetailsLoader} errorElement={<Error />} >
          <Route index element={<VansDetailContent />} />
          <Route path='vans/:id/pricing' element={<VansPricing />} />
          <Route path='vans/:id/photos/' element={<VansPhotos />} />
        </Route>

      </Route>


      <Route path='*' element={<PageNotFound />} />

    </Route>


  ))
  return (
    <>

      <RouterProvider router={routes} />

    </>
  );
}

export default App;
{/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} />
      <Route path='vans/:id' element={<VanDetails />} />

      <Route path='host' element={<Hostlayout />} >
        <Route index element={<Host />} />
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Review />} />
        <Route path='vans' element={<VansList />} />

        <Route path='vans/:id' element={<VansListDetails />} >
          <Route index element={<VansDetailContent />} />
          <Route path='vans/:id/pricing' element={<VansPricing />} />
          <Route path='vans/:id/photos/' element={<VansPhotos />} />
        </Route>

      </Route>


      <Route path='*' element={<PageNotFound />} />

    </Route>
  </Routes>
</BrowserRouter> */}
