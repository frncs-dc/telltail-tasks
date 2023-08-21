import React, { useEffect } from "react";

const HomeTerrain = () => {

    useEffect(() => {

         // Spawning Script
         const draggableElements = document.querySelectorAll('[id^="pet"]');
         const container = document.getElementById("house");
         const containerOffsetTop = container.getBoundingClientRect().top;
         const containerOffsetLeft = container.getBoundingClientRect().left;
         const containerWidth = parseFloat(getComputedStyle(container).width);
         const containerHeight = parseFloat(getComputedStyle(container).height);
         const minDistance = 100;
 
         draggableElements.forEach(element => {
             let newLeft, newTop;
             do {
                 newLeft = Math.random() * (containerWidth - element.clientWidth) + containerOffsetLeft;
                 newTop = Math.random() * (containerHeight - element.clientHeight) + containerOffsetTop;
             } while (isTooClose(newLeft, newTop));
 
             element.style.left = newLeft + "px";
             element.style.top = newTop + "px";
         });
 
         function isTooClose(newLeft, newTop) {
             for (const element of draggableElements) {
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

        //Drag Script
        const dragElement = (elmnt) => {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            elmnt.onmousedown = function (e) {
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
            };

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
        };

        draggableElements.forEach(element => {
            dragElement(element);
        });
    }, []);

    return (  
        <div id="house" className="container">
            <div className="container pets" id="pet1"><img src="TestPets/Test_Pet1.png" alt="Piplup!"/></div>
            <div className="container pets" id="pet2"><img src="TestPets/Test_Pet2.png" alt="Squirtle!"/></div>
            <div className="container pets" id="pet3"><img src="TestPets/Test_Pet3.png" alt="Mudkip!"/></div>
            <div className="container pets" id="pet4"><img src="TestPets/Test_Pet4.png" alt="Oshawott!"/></div>
            <div className="container pets" id="pet5"><img src="TestPets/Test_Pet5.png" alt="Froakie!"/></div>
        </div>
    );
}
 
export default HomeTerrain;