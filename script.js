const downloadBtn = document.querySelector("#download-btn");
const contactBtn = document.querySelector("#contact-btn");
const aboutItch = document.querySelector("#itch-icon");
const aboutLinkedIn = document.querySelector("#linkedin-icon");
const gameplays = document.querySelectorAll("#gameplay");

function visitSite(urlLink) {
    window.open(urlLink);
}

aboutItch.onclick = function () {
    visitSite("https://felipedasilvasavory.itch.io/");
};

aboutLinkedIn.onclick = function () {
    visitSite("https://www.linkedin.com/in/felipe-da-silva-savory-926714291/");
};
