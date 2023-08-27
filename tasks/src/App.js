import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import YourTasks from './routes/YourTasks';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <YourTasks />
    </div>
  );
}

export default App;
