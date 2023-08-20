function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = function(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = function(e) {
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
}

document.addEventListener("DOMContentLoaded", function () {
    const draggableElements = document.querySelectorAll('[id^="test"]');
    draggableElements.forEach(element => {
        dragElement(element);
    });

});
