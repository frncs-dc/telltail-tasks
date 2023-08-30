import React, { useState, useEffect } from "react";
import PetInfoModal from './PetInfoModal.js';

const HomeTerrain = (props) => {
    //Test Data
    const pets = [
        { 
            name: "Piplup",
            species: "penguin",
            image: "TestPets/Test_Pet1.png"
        },
        {
            name: "Mudkip", 
            species: "mudskip",
            image: "TestPets/Test_Pet3.png"
        },
        { 
            name: "Squirtle", 
            species: "turtle",
            image: "TestPets/Test_Pet2.png"
        },
        { 
            name: "Froakie", 
            species: "frog",
            image: "TestPets/Test_Pet5.png"
        },
        { 
            name: "Oshawott", 
            species: "seal",
            image: "TestPets/Test_Pet4.png"
        }
      ];
    
    //Info Modal Popup State Manager
    const [buttonPopup, setButtonPopup] = useState(false);

    const handlePopupExit = () => {
        setButtonPopup(false);
      }

    //Select InfoPet onclick
    const [selectedInfoPet, setSelectedInfoPet] = useState(null)

    //onStart useEffect
    useEffect(() => {

         // Spawning Script
         const userPet = document.querySelectorAll('[id^="pet"]');
         const container = document.getElementById("house");
         const containerOffsetTop = container.getBoundingClientRect().top;
         const containerOffsetLeft = container.getBoundingClientRect().left;
         const containerWidth = parseFloat(getComputedStyle(container).width);
         const containerHeight = parseFloat(getComputedStyle(container).height);
         const minDistance = 100;
 
         userPet.forEach(element => {
             let newLeft, newTop;
             do {
                 newLeft = Math.random() * (containerWidth - element.clientWidth) + containerOffsetLeft;
                 newTop = Math.random() * (containerHeight - element.clientHeight) + containerOffsetTop;
             } while (isTooClose(newLeft, newTop));
 
             element.style.left = newLeft + "px";
             element.style.top = newTop + "px";
         });
 
         function isTooClose(newLeft, newTop) {
             for (const element of userPet) {
                 const existingLeft = parseFloat(element.style.left);
                 const existingTop = parseFloat(element.style.top);
                 const horizontalDistance = Math.abs(newLeft - existingLeft);
                 const verticalDistance = Math.abs(newTop - existingTop);
 
                 if (horizontalDistance < minDistance && verticalDistance < minDistance) {
                     return true;
                 }
             }
             return false;
         }
        
    }, []);

    //User Commands Scripts
    useEffect(() => {
        const userPet = document.querySelectorAll('[id^="pet"]');
        const elementListeners = [];

        //Info Script
        const infoPet = (elmnt, index) => {
            function onClick(e) {
                e = e || window.event;
                e.preventDefault();              
                setButtonPopup(true);
                setSelectedInfoPet(index);
            }

            elmnt.addEventListener("click", onClick);
            elementListeners.push({ element: elmnt, listener: onClick });
        }

        // Drag Script
        const dragPet = (elmnt) => {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
            function onMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = function (e) {
                    elementDrag(e);
                };
            }
    
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
    
                // Calculate the new element position within the container's boundaries
                const container = document.getElementById("house");
                const containerRect = container.getBoundingClientRect();
                const minTop = containerRect.top;
                const maxTop = containerRect.bottom - elmnt.clientHeight;
                const minLeft = containerRect.left;
                const maxLeft = containerRect.right - elmnt.clientWidth;
    
                const newTop = Math.min(Math.max(elmnt.offsetTop - pos2, minTop), maxTop);
                const newLeft = Math.min(Math.max(elmnt.offsetLeft - pos1, minLeft), maxLeft);
    
                // set the element's new position:
                elmnt.style.top = newTop + "px";
                elmnt.style.left = newLeft + "px";
            }
    
            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
    
            elmnt.addEventListener("mousedown", onMouseDown);
            elementListeners.push({ element: elmnt, listener: onMouseDown });
    
        };

    
        userPet.forEach((element, index) => {
            if (props.command === "Information") {
                infoPet(element, index);
            }
            else if (props.command === "Drag") {
                dragPet(element);
            }
            else if (props.command === "Feed") {
                console.log("Feed");
            }
            else if (props.command === "Inventory") {
                console.log("Inventory");
            }
            else if (props.command === "Return") {
                console.log("Return");
            }
        });
    
        return () => {
            elementListeners.forEach(({ element, listener }) => {
                element.removeEventListener("mousedown", listener);
                element.removeEventListener("click", listener)
            });
        };
    
    }, [props.command]);

// need code to pass popup data how???
    return ( 
        <>
         <PetInfoModal trigger={buttonPopup} onPopupExit={handlePopupExit} petInfo={selectedInfoPet !== null ? pets[selectedInfoPet] : null}/>   
        
        <div id="house" className="container">
        <h1>Doing {props.command}</h1>
            
        {pets.map((pet, index) => (
            <div className="container pets" id={`pet${index + 1}`} key={index}>
                <img src={pet.image} alt={`${pet.name}!`} />
            </div>
        ))}
        </div>
        
        </>
    );
}
 
export default HomeTerrain;