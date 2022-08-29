import { Routes, Route } from 'react-router-dom';
import { Landing } from './landing';
import { Profile } from './myprofile';
import React from 'react';
  
  
  const routes = (
      <Routes>
        <Route  path="/landing" element={<Landing/>}/>
        <Route  path="/myprofile" element={<Profile/>}/>
      </Routes>
  )
  
  export default routes