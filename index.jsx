import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import Section from "./Section"
import Card from "./Card.jsx"
import data from "./data.jsx"

function App() {
  
  return (
    <div>
      <Header />
      <Section />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 