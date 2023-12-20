import React, { useState, useEffect } from "react";
import PetInfoModal from './PetInfoModal.js';

const HomeTerrain = () => {
    //Test Data
    const pets = [
        { 
            name: "Piplup",
            task: "Workout",
            dateAcquired: "11/11/11",
            image: "TestPets/Test_Pet1.png",
            affection: 10,
            hunger: 20
        },
        {
            name: "Mudkip", 
            task: "Workout",
            dateAcquired: "11/11/11",
            image: "TestPets/Test_Pet3.png",
            affection: 10,
            hunger: 20
        },
        { 
            name: "Squirtle", 
            task: "Workout",
            dateAcquired: "11/11/11",
            image: "TestPets/Test_Pet2.png",
            affection: 10,
            hunger: 20
        },
        { 
            name: "Froakie", 
            task: "Workout",
            dateAcquired: "11/11/11",
            image: "TestPets/Test_Pet5.png",
            affection: 10,
            hunger: 20
        },
        { 
            name: "Oshawott", 
            task: "Workout",
            dateAcquired: "11/11/11",
            image: "TestPets/Test_Pet4.png",
            affection: 10,
            hunger: 20
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
                 newLeft = Math.random() * (containerWidth - element.clientWidth - element.clientLeft * 2) + containerOffsetLeft;
                 newTop = Math.random() * (containerHeight - element.clientHeight - element.clientTop * 2) + containerOffsetTop;
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
        //Info Script
        const infoPet = (elmnt, index) => {
            function onDoubleClick(e) {
                e = e || window.event;
                e.preventDefault();              
                setButtonPopup(true);
                setSelectedInfoPet(index);
            }

            elmnt.addEventListener("dblclick", onDoubleClick);
        }

        // Drag Script
        const dragPet = (elmnt) => {
            let newX = 0, newY = 0, curX = 0, curY = 0;
    
            function onMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                curX = e.clientX;
                curY = e.clientY;
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
                newX = curX - e.clientX;
                newY = curY - e.clientY;
                curX = e.clientX;
                curY = e.clientY;
    
                // Calculate the new element position within the container's boundaries
                const container = document.getElementById("house");
                const containerRect = container.getBoundingClientRect();
                const minTop = containerRect.top;
                //Formula for furthest distance of element is
                // FurthestDist = RectangleBottom - elementHeight - elementBorders
                const maxTop = containerRect.bottom - elmnt.clientHeight - elmnt.clientTop * 2;
                const minLeft = containerRect.left;
                const maxLeft = containerRect.right - elmnt.clientWidth - elmnt.clientLeft * 2;
                console.log(elmnt);
                const newTop = Math.min(Math.max(elmnt.offsetTop - newY, minTop), maxTop);
                const newLeft = Math.min(Math.max(elmnt.offsetLeft - newX, minLeft), maxLeft);
                
                console.log(e.clientX);
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
    
        };

        //Set effects for each
        userPet.forEach((element, index) => {
                infoPet(element, index);
                dragPet(element);
        });
    
    }, []);

// need code to pass popup data how???
    return ( 
        <>
         <PetInfoModal trigger={buttonPopup} onPopupExit={handlePopupExit} petInfo={selectedInfoPet !== null ? pets[selectedInfoPet] : null}/>   
        
        <div id="house" className="container">
            
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