import React from 'react';
import Login from './components/Login';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}>
        </Route>
      </Routes>
      </BrowserRouter>
      <BrowserRouter>
      <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
      
  );
}

export default App;