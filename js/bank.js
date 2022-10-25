let confirmed = document.getElementById("confirmed");
confirmed.onclick = () => {
    let balance = parseInt(document.getElementById("balance").innerText);
    document.getElementById("balance").innerHTML = balance + 1;
    claimPopup.style.display = "none";
}

let bankInfoPopup = document.getElementById("bankInfoPopup");
let bankInfoButton = document.getElementById("bankInfoButton");
let closeBankInfo = document.getElementById("closeBankInfo");
bankInfoButton.onclick = () => {
  bankInfoPopup.style.display = "block";
}
closeBankInfo.onclick = () => {
  bankInfoPopup.style.display = "none";
}

let claimPopup = document.getElementById("claimPopup");
let claimButton = document.getElementById("claimButton");
let closeClaim = document.getElementById("closeClaim");
claimButton.onclick = () => {
    claimPopup.style.display = "block";
}
closeClaim.onclick = () => {
    claimPopup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === bankInfoPopup) {
        bankInfoPopup.style.display = "none";
    }
    if (event.target === claimPopup) {
        claimPopup.style.display = "none";
    }
}

setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("currTime").innerHTML = d.toLocaleTimeString();
}

