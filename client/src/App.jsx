import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import OneProduct from './views/OneProduct';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<OneProduct />} path="/:id" />
        <Route element={<Update />} path="/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
