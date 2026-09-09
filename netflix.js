//language-dropdown
const languageDropdown=document.querySelector(".language-dropdown");
const languageButton=document.querySelector(".language-btn");
languageButton.addEventListener("click",(event)=>{
    event.stopPropagation()
    languageDropdown.classList.toggle("active")
})
document.addEventListener("click",()=>{
    languageDropdown.classList.remove("active")
})
//footer languagedriopdown
const footerLanguageButton=document.querySelector(".footer-language-btn");
const footerLanguageDropdown=document.querySelector(".footer-language-dropdown");

footerLanguageButton.addEventListener("click",(event)=>{
event.stopPropagation()
footerLanguageDropdown.classList.toggle("active")
})
document.addEventListener("click",()=>{
    footerLanguageDropdown.classList.remove("active")
})
//arrow btn
const card=document.querySelector(".cards");
const leftArrow=document.querySelector(".left-arrow");
const rightArrow=document.querySelector(".right-arrow");

rightArrow.addEventListener("click",()=>{
    card.scrollLeft +=600
})
leftArrow.addEventListener("click",()=>{
    card.scrollLeft-=600
})

//faq box
const faqQuestions=document.querySelectorAll(".faq-question");
faqQuestions.forEach(function(question){
    question.addEventListener("click",()=>{
        const faqBox=question.closest(".faq-box")
        faqBox.classList.toggle("active")
    })
})
//hero-mail
const heroForm = document.getElementById("heroForm");
const heroEmail = document.getElementById("heroEmail");
const heroEmailError= document.getElementById("heroEmailError");

heroForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const email=heroEmail.value.trim();
    if(email===""){
        heroEmailError.textContent="Please enter your email address."
        heroEmailError.style.display="block"
        heroEmail.focus()
        return;
    }
    const emailPattern=
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        heroEmailError.textContent="Please enter a valid email address."
        heroEmailError.style.display="block";
        heroEmail.focus()
        return
    }
    heroEmailError.style.display="none"
    window.location.href="signin.html"
})

//bottom getstarted
const bottomForm =   document.getElementById("bottomForm");
const bottomEmail =document.getElementById("bottomEmail");
const bottomEmailError =    document.getElementById("bottomEmailError");

bottomForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const email=bottomEmail.value.trim()
    if(email===""){
        bottomEmailError.textContent="Please enter your email address.";
        bottomEmailError.style.display="block"
        bottomEmail.focus()
        return;
    }
    const emailPatter= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPatter.test(email)){
        bottomEmailError.textContent="Please enter a valid email address.";
        bottomEmailError.style.display="block"
        bottomEmail.focus()
        return
    }
    bottomEmailError.style.display="none"
    window.location.href="signin.html"
})

