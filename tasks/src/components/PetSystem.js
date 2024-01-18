import HomeTerrain from '../components/HomeTerrain';
//import '../../public/index.css';
import {useState} from "react";


function PetSystem() {
  
  const [selectedCommand, setSelectedCommand] = useState(null);

  const handleSelectCommand = (userCommand) => {
    setSelectedCommand(userCommand);
  }

  return (
    <div>
      <h1>Normal Terrain</h1>
      <div>Currently doing: {selectedCommand}</div>
      <HomeTerrain command = {selectedCommand} />
      {/* <UserControls onSelectCommand={handleSelectCommand} /> */}
    </div>
  );
}

export default PetSystem;
