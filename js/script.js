const body = document.body;
const contextMenu = document.getElementById("contextMenu");
// All ---Fun 
function contextMenuHandler(e) {
  e.preventDefault();
  contextMenu.style.display = "block";
  let s = (contextMenu.style.transform =
    "translate(" + e.pageX + "px," + e.pageY + "px)");
}
function clickHanlder() {
  contextMenu.style.display = "none";
}
// All --- Event
body.addEventListener("click", clickHanlder);
body.addEventListener("contextmenu", contextMenuHandler);
