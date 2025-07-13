const startBtn=document.querySelector("#startBtn"),
endBtn=document.querySelector("#endBtn"),
prevNext=document.querySelectorAll(".prevNext"),
numbers=document.querySelectorAll(".link");

let currentStep=0;

numbers.forEach((number,numIndex)=>{
    number.addEventListener("click",(e)=>{
        e.preventDefault();
        currentStep=numIndex;
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
    })
})

prevNext.forEach(button=>{
    button.addEventListener("click",(e)=>{
        currentStep+=e.target.id==="next" ? 1 : -1;
        numbers.forEach((number,numIndex)=>{
            number.classList.toggle("active",numIndex===currentStep);
        })
    })
})