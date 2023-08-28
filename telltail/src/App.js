import 'bootstrap/dist/css/bootstrap.css';
import HomeTerrain from './components/HomeTerrain';
import UserControls from './components/UserControls';
import {useState} from "react";


function App() {

  const [selectedCommand, setSelectedCommand] = useState();

  const handleSelectCommand = (userCommand) => {
    setSelectedCommand(userCommand);
  }

  return (
    <div className="App">
      <h1>Normal Terrain</h1>
      <div>Currently doing: {selectedCommand}</div>
      <HomeTerrain command = {selectedCommand} />
      <UserControls onSelectCommand={handleSelectCommand} />
    </div>
  );
}

export default App;
