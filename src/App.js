
import './App.css';

import Pokeman from './components/Search';
import Nav from './components/Nav';
import List from './components/List';
import Bookmark from './components/Bookmark';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Pokeman/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/bookmark' element={<Bookmark/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
