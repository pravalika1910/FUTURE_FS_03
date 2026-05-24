// ENROLL POPUP

const popup = document.getElementById("popup");

const enrollBtn = document.querySelector(".primary-btn");

const closeBtn = document.querySelector(".close-btn");

enrollBtn.addEventListener("click", () => {

  popup.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

  popup.style.display = "none";

});

window.addEventListener("click", (e) => {

  if(e.target === popup){

    popup.style.display = "none";

  }

});


// FREE DEMO BOX

const demoBtn = document.querySelector(".secondary-btn");

const demoBox = document.getElementById("demoBox");

demoBtn.addEventListener("click", () => {

  if(demoBox.style.display === "block"){

    demoBox.style.display = "none";

  }

  else{

    demoBox.style.display = "block";

  }

});


// LEARN MORE BOX

const learnBtn = document.getElementById("learnBtn");

const learnBox = document.getElementById("learnBox");

learnBtn.addEventListener("click", () => {

  if(learnBox.style.display === "block"){

    learnBox.style.display = "none";

  }

  else{

    learnBox.style.display = "block";

  }

});