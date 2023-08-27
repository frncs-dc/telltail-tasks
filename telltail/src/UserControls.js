import { useState } from "react";

const UserControls = (props) => {

    let userCommands = ["Information", "Drag", "Feed", "Inventory", "Return"];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (  
        <ul className="list-group list-group-horizontal-md justify-content-around">
            {userCommands.map((userCommand, index) => (
                <li className={
                    selectedIndex===index
                        ? "list-group-item active"
                        : "list-group-item"
                } 
                key={userCommand}
                onClick={(e) => {
                    setSelectedIndex(index);
                    props.onSelectCommand(userCommand); }}
                >
                    {userCommand}
                </li>   
            ))}
        </ul>
    );
}
 
export default UserControls;