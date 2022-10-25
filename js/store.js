

let descriptionPopup = document.getElementById("descriptionPopup");
let descriptionButton = document.getElementById("descriptionButton");
let closeDescription = document.getElementById("closeDescription");
descriptionButton.onclick = () => {
  descriptionPopup.style.display = "block";
}
closeDescription.onclick = function() {
  descriptionPopup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === descriptionPopup) {
        descriptionPopup.style.display = "none";
    }
}

setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("currTime").innerHTML = d.toLocaleTimeString();
}


