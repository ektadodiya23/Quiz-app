import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuizCompo from './quizPart/QuizCompo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anslist from './quizPart/Anslist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizCompo />}></Route>
          <Route path="/ansList" element={<Anslist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
