
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pagess/Login'
import Register from './pagess/Register'
import Home from './pagess/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/'>
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/> }/>
       <Route path='/home' element={<Home/> }/>
       </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
