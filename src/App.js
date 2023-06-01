import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Weather from './Weather';
import Signin from './Signin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/weather' element={<Weather/>}/> protected redirected after Authenticate
        <Route path='/' element={<Signin/>}/> googlebutton
      </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
