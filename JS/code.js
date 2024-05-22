// ================= Navbar style on scroll =======================
window.addEventListener("scroll",function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("window-scroll",window.scrollY>50);
});



// ================= FAQ =======================


let article = document.querySelectorAll(".faq");
let len= article.length;

let icon = document.querySelectorAll(".faq__icon i");
let paras =document.querySelectorAll(".que__ans p");

for(let m=0;m<len; m++){
    article[m].addEventListener("click",()=>{
        if(icon[m].className==="ri-add-line"){
            icon[m].className="ri-subtract-fill";
        }else{
            icon[m].className ="ri-add-line";
        }
    });
}

for(let n=0;n<len;n++){
    article[n].addEventListener("click",()=>{
        if(paras[n].className==="para"){
            paras[n].className="open";
        }else{
            paras[n].className="para";
        }
    });
}



// ================= Swipper JS =======================


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        600:{
            slidesPerView: 2,
        }
    }
  });




