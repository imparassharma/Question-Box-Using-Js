const btns = document.querySelectorAll(".question-btn");
const ques = document.querySelector(".ques-section");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const question = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});

const toggle = document.querySelector(".nav-btn");
const links = document.querySelector(".links");
const btn = document.getElementById("btn")

toggle.addEventListener('click',function(){

    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
        btn.style.backgroundColor="white";
    }
    else
    {
        links.classList.add("show-links");
        btn.style.backgroundColor="black";
    }
})