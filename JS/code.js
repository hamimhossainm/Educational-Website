// ================= Navbar style on scroll =======================
window.addEventListener("scroll",function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("window-scroll",window.scrollY>50);
});

let faqs= document.querySelectorAll(".faq");

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("open");
    });
})