import React, { useState } from 'react';
import './App.css';
import Header from './component/header/header';
import Dashboard from './component/maindashboard/dashboard';

function App() {
  const [selectedcity, setselectedcity] = useState('');
  const [loading, setLoading] = useState(false);

  function handlecitychange(cityname) {
    setselectedcity(cityname);
  }

  return (
    <div>

      {loading && (
        <div className="fullscreen-loader">
          <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." className="loading-spinner" />
        </div>
      )}

      <Header oncitychange={handlecitychange} />
      <Dashboard city={selectedcity} setLoading={setLoading} />
    </div>
  );
}

export default App;
