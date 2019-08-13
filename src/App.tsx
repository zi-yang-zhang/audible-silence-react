import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/MarkdownDisplay'
import MarkdownDisplay from './components/MarkdownDisplay';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MarkdownDisplay/>
      </header>
    </div>
  );
}

export default App;
