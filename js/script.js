const body = document.body;
const contextMenu = document.getElementById("contextMenu");


// All ---Fun 
function contextMenuHandler(e) {
  e.preventDefault();
  contextMenu.style.display = "block";
  let s = (contextMenu.style.transform =
    "translate(" + e.pageX + "px," + e.pageY + "px)");
}

function hideConstextMenu() {
  contextMenu.style.display = "none";
}

function keyDownHandler(e) {
  if(e.keyCode === 27)
    contextMenu.style.display = "none";
  
}

// All --- Event
body.addEventListener("contextmenu", contextMenuHandler);
body.addEventListener("click", hideConstextMenu);
body.addEventListener("keydown", keyDownHandler);
