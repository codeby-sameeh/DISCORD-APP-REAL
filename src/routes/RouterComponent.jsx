import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Online from '../layout-component/online';
import All from '../layout-component/all';
import Pending from '../layout-component/pending';
import Blocked from '../layout-component/blocked';

export default function RouterComponent() {
  return (
    <>
     {/* <Routes>
         <Route path='/' element={<Online/>}/>  
         <Route path='/all' element={<All/>}/>
         <Route path='/pending' element={<Pending/>}/>
         <Route path='/blocked' element={<Blocked />}/>
       </Routes> */}
    </>
  )
}