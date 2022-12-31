import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  const [text, setText] = useState('');
  return (
    <React.Fragment>
      <div>
        <div>
          <textarea
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        <p>text: {text}</p>
      </div>
    </React.Fragment>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
