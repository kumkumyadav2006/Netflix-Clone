//slider
const leftbtn=document.querySelector(".arrow.left");
const rightbtn=document.querySelector(".arrow.right");
const cards=document.querySelector(".cards");

leftbtn.addEventListener("click",()=>{
cards.scrollLeft -=600;/*scrollLeft ka matlab direction nahi hai Yeh sirf position batata hai (left se kitna scroll hua)*/
});

rightbtn.addEventListener("click",()=>{/*right click-left part hide hota hai .left click hidden part aata hai vapis*/
    cards.scrollLeft += 600;
})


//FAQ
const boxes = document.querySelectorAll(".faq .box");

boxes.forEach(box => {
  const question = box.querySelector(".question");

  question.addEventListener("click", () => {
    //sb boxes bnd kro
    boxes.forEach(b =>{
        if(b!== box){
            b.classList.remove("active");
        }
    });
    box.classList.toggle("active");
  });
});
//language change
const langBtn = document.querySelector('.lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');

langBtn.addEventListener('click', () => {
  langDropdown.style.display = (langDropdown.style.display === 'block') ? 'none' : 'block';
});

const btn=document.querySelector(".english-btn");
const dropDown=document.querySelector(".language-dropdown");

btn.onclick=()=>{
    dropDown.style.display=dropDown.style.display==='block'?'none':'block';
}
//email-get started---redirect page
const getStartedBtn=document.querySelector(".get-started");
const emailInput=document.querySelector(".input-box");
getStartedBtn.addEventListener("click",()=>{
  if(emailInput.value===''){
    alert("Please enter email");
    return;
  }
  //email save kro
  localStorage.setItem("userEmail",email);
  //next page pe jao 
  window.location.href="login.html";
});
//niche wala email
const starts=document.querySelector(".starts");
const email=document.getElementById("email");
starts.addEventListener("click",()=>{
  if(email.value===""){
    alert("Please enter email");
    return;

  }
  localStorage.setItem("userEmail",emailInput.value);
  window.location.href="login.html";
})

//language translation
const translations = {
  en: {
    hero1: "Unlimited movies, ",
    hero2: "shows, and more",
    hero3: "Starts at ₹149. Cancel at any time.",
    hero4: "Ready to watch? Enter your email to create or restart your membership.",
    trending: "Trending Now",
    reasons: "More reasons to join",
    tv: "Enjoy on your TV",
    tvDesc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    faq: "Frequently Asked Questions",
    q1: "What is Netflix?",
  a1: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime and more. You can watch anytime without ads for a monthly price.",

  q2: "How much does Netflix cost?",
  a2: "Plans range from ₹149 to ₹649 per month depending on features.",

  q3: "Where can I watch?",
  a3: "You can watch on smart TVs, phones, tablets, laptops and more. Download shows to watch offline anytime.",

  q4: "How do I cancel?",
  a4: "You can cancel your subscription anytime online with no extra fees.",

  q5: "What can I watch on Netflix?",
  a5: "Netflix has movies, series, documentaries, anime and original content.",

  q6: "Is Netflix good for kids?",
  a6: "Yes, Netflix has a kids section with parental controls for safe viewing.",
    email: "Email Address",
    contact: "Questions? Call 000-800-919-1743",
faqLink: "FAQ",
investor: "Investor Relations",
privacy: "Privacy",
speed: "Speed Test",

help: "Help Centre",
jobs: "Jobs",
cookie: "Cookie Preferences",
legal: "Legal Notices",

account: "Account",
ways: "Ways to Watch",
corporate: "Corporate Information",
only: "Only on Netflix",

media: "Media Centre",
terms: "Terms of Use",
contactUs: "Contact Us",

country: "Netflix India",
recaptcha: "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
ready: "Ready to watch? Enter your email to create or restart your membership.",
start: "Get Started"
  },

  hi: {
    hero1: "अनलिमिटेड फिल्में, ",
    hero2: "शो और बहुत कुछ",
    hero3: "₹149 से शुरू। कभी भी कैंसल करें।",
    hero4: "देखने के लिए तैयार? अपना ईमेल डालें।",
    trending: "ट्रेंडिंग अब",
    reasons: "जुड़ने के और कारण",
    tv: "अपने टीवी पर देखें",
    tvDesc: "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स आदि पर देखें।",
    faq: "अक्सर पूछे जाने वाले सवाल",
    q1: "नेटफ्लिक्स क्या है?",
  a1: "नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जिसमें टीवी शो, फिल्में, एनीमे और बहुत कुछ मिलता है। आप कभी भी बिना विज्ञापन के देख सकते हैं।",

  q2: "नेटफ्लिक्स की कीमत कितनी है?",
  a2: "प्लान ₹149 से ₹649 प्रति माह तक होते हैं।",

  q3: "मैं कहाँ देख सकता हूँ?",
  a3: "आप स्मार्ट टीवी, मोबाइल, टैबलेट और लैपटॉप पर देख सकते हैं। ऑफलाइन देखने के लिए डाउनलोड भी कर सकते हैं।",

  q4: "मैं कैसे कैंसल करूँ?",
  a4: "आप कभी भी ऑनलाइन बिना किसी फीस के अपना सब्सक्रिप्शन कैंसल कर सकते हैं।",

  q5: "नेटफ्लिक्स पर क्या देख सकते हैं?",
  a5: "नेटफ्लिक्स पर फिल्में, सीरीज, डॉक्यूमेंट्री और ओरिजिनल कंटेंट मिलता है।",

  q6: "क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?",
  a6: "हाँ, इसमें बच्चों के लिए अलग सेक्शन और पैरेंटल कंट्रोल्स होते हैं।",
    email: "ईमेल पता",
    
  tv1: "अपने टीवी पर देखें",
  tv2: "ऑफलाइन देखने के लिए डाउनलोड करें",
  tv3: "हर जगह देखें",
  tv4: "बच्चों के लिए प्रोफाइल बनाएं",

  tvDesc1: "स्मार्ट टीवी आदि पर देखें",
  tvDesc2: "अपने पसंदीदा शो सेव करें",
  tvDesc3: "फोन, लैपटॉप पर देखें",
  tvDesc4: "बच्चों के लिए मजेदार शो",contact: "कोई सवाल है? कॉल करें 000-800-919-1743",
faqLink: "सामान्य प्रश्न",
investor: "निवेशक संबंध",
privacy: "गोपनीयता",
speed: "स्पीड टेस्ट",

help: "सहायता केंद्र",
jobs: "नौकरियां",
cookie: "कुकी प्राथमिकताएं",
legal: "कानूनी नोटिस",

account: "खाता",
ways: "देखने के तरीके",
corporate: "कॉर्पोरेट जानकारी",
only: "केवल नेटफ्लिक्स पर",

media: "मीडिया सेंटर",
terms: "उपयोग की शर्तें",
contactUs: "संपर्क करें",

country: "नेटफ्लिक्स भारत",
recaptcha: "यह पेज Google reCAPTCHA द्वारा सुरक्षित है ताकि आप बॉट न हों।",
ready: "देखने के लिए तैयार हैं? अपना ईमेल डालें और अपनी मेंबरशिप शुरू या दोबारा शुरू करें।",
start: "शुरू करें"
}
  };


function changeLang(lang) {

  // text change
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // placeholder change
  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-key-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // save language
  localStorage.setItem("lang", lang);
}

// page load pe same language
window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  changeLang(savedLang);
};