import React from 'react';
import Chat from './component/Chat/Chat';
import SideBar from './component/SideBar/SideBar';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
