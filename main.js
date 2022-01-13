const modal = document.querySelector("#modal-tech-skills");
const modalBtn = document.querySelector("#myBtn");
const span = document.querySelector("#close-btn");

modalBtn.addEventListener("click", () =>{
  modal.className = "open";
});

span.addEventListener("click", () =>{
  modal.className = "close";
});
