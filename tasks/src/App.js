import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import YourTasks from './components/YourTasks';
import AboutUs from './pages/AboutUs';
import Story from './pages/Story';
import Login from './pages/Login';

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
              path="/YourTasks" 
              element={<YourTasks />}
            />
            <Route
              path="/AboutUs"
              element={<AboutUs />}
            />
            <Route
              path="/Story"
              element={<Story />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
