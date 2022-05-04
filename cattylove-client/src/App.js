import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageLayout from './containers/PageLayout/PageLayout';
import AddCat from './containers/AddCat/AddCat';
import Admin from './containers/Admin/Admin';
import AllCats from './containers/AllCats/AllCats';
import EditCat from './containers/EditCat/EditCat';
import Comment from './containers/comment/comment';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './containers/Login/Login';
import Catdeatil from './containers/CatDetail/catdeatil';
import AdminLogin from './containers/AdminLogin/AdminLogin';
import CONSTANTS from './utility/Constants';

import './App.css'
import CatDetail from './containers/CatDetail/CatDetail';

function App() {

  const RequireAdminAuth = ({ children }) => {
    const token = localStorage.getItem(CONSTANTS.adminTokenKey)
    const location = useLocation()

    return token ? children : <Navigate to={'/admin/login'} state={{ from: location.pathname }} replace />
  }

  return (
    <Auth0Provider 
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={'http://localhost:3000/login'}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope={'user:api'} >
      <BrowserRouter>
        <PageLayout>
          <Routes>
              <Route path='/' element={<AllCats/> } />
              <Route path='/admin' element={<RequireAdminAuth><Admin /></RequireAdminAuth>} />
              <Route path='/admin/add' element={<RequireAdminAuth><AddCat /></RequireAdminAuth>} />
              <Route path='/admin/edit/:id' element={<RequireAdminAuth><EditCat /></RequireAdminAuth>} />
              <Route path='/admin/login' element={<AdminLogin />} />
              <Route path='/comment' element={<Comment />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cats/:id' element={<CatDetail />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
