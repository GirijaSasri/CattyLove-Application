import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './containers/PageLayout/PageLayout';
import AddCat from './containers/AddCat/AddCat';
import Admin from './containers/Admin/Admin';
import AllCats from './containers/AllCats/AllCats';
import EditCat from './containers/EditCat/EditCat';
import Comment from './containers/comment/comment';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './containers/Login/Login';
import Catdeatil from './containers/CatDetail/catdeatil';

import './App.css'

function App() {
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
              <Route path='/admin' element={<Admin />} />
              <Route path='/admin/add' element={<AddCat />} />
              <Route path='/admin/edit/:id' element={<EditCat />} />
              <Route path='/comment' element={<Comment />} />
              <Route path='/login' element={<Login />} />
              <Route path='/catdetail' element={<Catdeatil />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
