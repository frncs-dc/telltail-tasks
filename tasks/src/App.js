import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import YourTasks from './components/YourTasks';
import AboutUs from './routes/AboutUs';
import Story from './routes/Story';
import Login from './routes/Login';

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
