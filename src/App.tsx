import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Maincontainer from './components/Maincontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import MainApp from './MainApp'

import Message from './pages/messages/Message'

const App: React.FC = () => {
  

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='messages' element={<Message />}/>
        <Route index element={<div className='flex'>
         <Sidebar  />
         <Maincontainer />
         </div>} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
