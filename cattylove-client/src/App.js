import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './containers/PageLayout/PageLayout';
import AddCat from './containers/AddCat/AddCat';
import Admin from './containers/Admin/Admin';
<<<<<<< HEAD
import Cat from './containers/Cat/Cat';
=======
import EditCat from './containers/EditCat/EditCat';
>>>>>>> 2151765ec724eb60c216864880b3fae023f534b5

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
            <Route path='/' element={<Cat/> } />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/add' element={<AddCat />} />
            <Route path='/admin/edit/:id' element={<EditCat />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
