import './App.css';
import Main from './views/Main';
import { Routes, Route, Link } from 'react-router-dom';
import OneProduct from './views/OneProduct';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <div>

      </div>
      <div>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<OneProduct />} path="/:id" />
          <Route element={<Update />} path="/:id/edit" />
        </Routes>
      </div>

    </div>
  );
}

export default App;
