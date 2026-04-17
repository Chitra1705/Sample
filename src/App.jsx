import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './list/List'
import Crud from './crud/Crud'
import Form from './Form/Form'
import Formvalidation from './Form/Formvalidation'
import Crudexe from './crud/Crudexe'
import Kids from './pages/Kids'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/form' element={<Form/>}/>
        <Route path='/val' element={<Formvalidation/>}></Route>
        <Route path='/crud' element={<Crud/>}></Route> 
        <Route path='/list' element={<List/>}></Route> 
        <Route path='/crudexe' element={<Crudexe/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App