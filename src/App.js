import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="App">
      <TopBar />
      <MainContent />
      <div class="footer">
        <div class="copyright">2019 © Val Memoirs</div>
      </div>
    </div>
  );
}

export default App;
