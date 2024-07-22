import { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './Components/Header';



function App() {
  return (
    <Fragment>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Header><LandingPage /></Header>} />
          <Route path="/*" element={<>Page not found</>} />
        </Routes>
      </BrowserRouter>
    </Fragment>)
}

export default App;
