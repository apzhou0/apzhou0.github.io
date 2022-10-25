setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("currTime").innerHTML = d.toLocaleTimeString();
}

const hen = document.getElementById("hen");
setInterval(blink, 2500);
function blink() {
  hen.setAttribute('src','images/henblink.png');
  setTimeout(openEye, 100);
}
function openEye() {
  hen.setAttribute('src','images/hen.png');
}

const pet = document.getElementById("petButton");
pet.onclick = () => {
  var elem = document.createElement("img");
  document.getElementById("emote").appendChild(elem);
  elem.src = "images/heart.png";
  elem.id = "heart";
  setTimeout(afterPet, 1000);
}
function afterPet() {
  var elem = document.getElementById("heart");
  document.getElementById("emote").removeChild(elem);
}

var feedPopup = document.getElementById("feedPopup");
var feedButton = document.getElementById("feedButton");
var closeFeed = document.getElementById("closeFeed");
feedButton.onclick = function() {
  feedPopup.style.display = "block";
}
closeFeed.onclick = function() {
  feedPopup.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == feedPopup) {
    feedPopup.style.display = "none";
  }
  else if (event.target == invenPopup) {
    invenPopup.style.display = "none";
  }
}

var invenPopup = document.getElementById("invenPopup");
var invenButton = document.getElementById("invenButton");
var closeInven = document.getElementById("closeInven");
invenButton.onclick = function() {
  invenPopup.style.display = "block";
}
closeInven.onclick = function() {
  invenPopup.style.display = "none";
}





/*myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/treee.png') {
    myImage.setAttribute('src','images/table.png');
  } else {
    myImage.setAttribute('src','images/treee.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}*/