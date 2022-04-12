import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Components/Error';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
    <Navigation />
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="UserList" element={<UserList />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
