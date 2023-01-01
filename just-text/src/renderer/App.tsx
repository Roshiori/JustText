import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import fs from 'fs'
import './App.css';

const Hello = () => {

  const [text, setText] = useState('');


  return (
    <React.Fragment>
      <div>
        <div>
          <button id = 'open'>開く</button>
          <button id = 'save'>保存</button>
          <button id = 'saveWithName'>名前をつけて保存</button>
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
