import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AboutUs from './pages/AboutUs';
import Story from './pages/Story';
import Login from './pages/Login';
import Home from './pages/Home'
import Profile from './pages/Profile';
import PetSystem from './components/PetSystem';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/Profile"
              element={<Profile />}
            />
            <Route 
              path="/Home"
              element={<Home />}
            />
            <Route
              path="/AboutUs"
              element={<AboutUs />}
            />
            <Route
              path="/Story"
              element={<Story />}
            />
            <Route
              path="/PetSystem"
              element={<PetSystem />}
            />
            <Route 
              path="/SignUp" 
              element={<SignUp />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
