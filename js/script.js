let body = document.body;
let contextMenu = document.getElementById("contextMenu");
body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextMenu.style.visibility = "visible";
  contextMenu.style.opacity = "1";
  let s = (contextMenu.style.transform =
    "translate(" + e.pageX + "px," + e.pageY + "px)");
  console.log(e.pageX, e.pageY);
  console.log(s);
});
body.addEventListener("click", (e) => {
    e.preventDefault();
    contextMenu.style.visibility = "hidden";
    contextMenu.style.opacity = "0";
  });
