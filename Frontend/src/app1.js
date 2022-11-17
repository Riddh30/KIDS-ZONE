function show1() {
  document.getElementById("opt1").style.visibility = "visible";
}
function show11() {
  document.getElementById("opt1").style.visibility = "visible";
  document.getElementById("hmm").removeAttribute("onmouseout");
}
function show2() {
  document.getElementById("opt2").style.visibility = "visible";
}

function show22() {
  document.getElementById("opt2").style.visibility = "visible";
  document.getElementById("umm").removeAttribute("onmouseout");
}


const hov=new Audio('./sounds/swing-whoosh-110410.mp3');
function hover(){
hov.play();
}