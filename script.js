const downloadBtn = document.querySelector("#download-btn");
const contactBtn = document.querySelector("#contact-btn");
const aboutItch = document.querySelectorAll("#itch-icon");
const aboutLinkedIn = document.querySelector("#linkedin-icon");
const gameplays = document.querySelectorAll("#gameplay");
const videos = document.querySelectorAll("#project-media");

function visitSite(urlLink) {
    window.open(urlLink);
}

aboutItch[0].onclick = function () {
    visitSite("https://felipedasilvasavory.itch.io/");
};

aboutItch[1].onclick = function () {
    visitSite("https://felipedasilvasavory.itch.io/high-stakes");
};

aboutItch[2].onclick = function () {
    visitSite("https://xia-c.itch.io/cat-ural-disaster");
};

aboutItch[3].classList.toggle("active");
aboutItch[3].onclick = function () {};

aboutItch[4].onclick = function () {
    visitSite("https://felipedasilvasavory.itch.io/university-pinball-project");
};

gameplays[0].onclick = function () {
    visitSite("videos/highstakes.mp4");
};

gameplays[1].onclick = function () {
    visitSite("https://www.youtube.com/watch?v=jNWxWzDnJEc");
};

gameplays[2].classList.toggle("active");
gameplays[2].onclick = function () {};

gameplays[3].classList.toggle("active");
gameplays[3].onclick = function () {};

aboutLinkedIn.onclick = function () {
    visitSite("https://www.linkedin.com/in/felipe-da-silva-savory-926714291/");
};

contactBtn.onclick = function () {
    visitSite("mailto:s4404529@glos.ac.uk");
};

videos[0].play();
