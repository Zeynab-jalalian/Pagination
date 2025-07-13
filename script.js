const startBtn = document.querySelector("#startBtn"),
  endBtn = document.querySelector("#endBtn"),
  prevNext = document.querySelectorAll(".prevNext"),
  numbers = document.querySelectorAll(".link");

let currentStep = 0;

const updateBtn = () => {
  startBtn.disabled = currentStep === 0;
  prevNext[0].disabled = currentStep === 0;
  endBtn.disabled = currentStep === numbers.length - 1;
  prevNext[1].disabled = currentStep === numbers.length - 1;
};

numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep = numIndex;
    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");
    updateBtn();
  });
});

prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentStep += e.target.id === "next" ? 1 : -1;
    document.querySelector(".active").classList.remove("active");
    numbers[currentStep].classList.add("active");
    updateBtn();
  });
});

startBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  currentStep = 0;
  numbers[currentStep].classList.add("active");
  updateBtn();
});

endBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  currentStep = numbers.length - 1;
  numbers[currentStep].classList.add("active");
  updateBtn();
});
