
    let page2=document.querySelector("#two");
    let page3=document.querySelector("#three");
    let page4=document.querySelector("#four");
    let page5=document.querySelector("#five");
    let page6=document.querySelector("#six");
    let page1=document.querySelector("#one");
    
    let services=document.querySelector("#sc");
    let profile=document.querySelector("#pf")
    let about=document.querySelector("#ab")
    let albums=document.querySelector("#al")
    let contact=document.querySelector("#co")
    let home=document.querySelector("#hm")
   
    let pre=document.querySelector("#pfl")
    let se=document.querySelector("#scl");
    let ab=document.querySelector("#abl")
    let al=document.querySelector("#all")
    let co=document.querySelector("#col")
    let ho=document.querySelector("#hml")
    profile.addEventListener("click",function(){
       
       page1.style.display="none";
       page1.style.opacity="0";
       page2.style.display="block";
       page2.style.opacity="1";
       page3.style.display="none";
       page3.style.opacity="0";
       page4.style.display="none";
       page4.style.opacity="0";
       page5.style.display="none";
       page5.style.opacity="0";
       page6.style.display="none";
       page6.style.opacity="0";
    });
    services.addEventListener("click",function(){
        console.log("jscjbdc");
        page1.style.display="none";
        page1.style.opacity="0";
        page2.style.display="none";
        page2.style.opacity="0";
        page3.style.display="block";
        page3.style.opacity="1";
        page4.style.display="none";
        page4.style.opacity="0";
        page5.style.display="none";
        page5.style.opacity="0";
        page6.style.display="none";
        page6.style.opacity="0";
     });
     about.addEventListener("click",function(){
        page1.style.display="none";
        page1.style.opacity="0";
        page2.style.display="none";
        page2.style.opacity="0";
        page3.style.display="none";
        page3.style.opacity="0";
        page4.style.display="block";
        page4.style.opacity="1";
        page5.style.display="none";
        page5.style.opacity="0";
        page6.style.display="none";
        page6.style.opacity="0";
     });
     albums.addEventListener("click",function(){
        page1.style.display="none";
        page1.style.opacity="0";
        page2.style.display="none";
        page2.style.opacity="0";
        page3.style.display="none";
        page3.style.opacity="0";
        page4.style.display="none";
        page4.style.opacity="0";
        page5.style.display="block";
        page5.style.opacity="1";
        page6.style.display="none";
        page6.style.opacity="0";
     });
    contact.addEventListener("click",function(){
        page1.style.display="none";
        page1.style.opacity="0";
        page2.style.display="none";
        page2.style.opacity="0";
        page3.style.display="none";
        page3.style.opacity="0";
        page4.style.display="none";
        page4.style.opacity="0";
        page5.style.display="none";
        page5.style.opacity="0";
        page6.style.display="block";
        page6.style.opacity="1";
     });
     home.addEventListener("click",function(){
        page1.style.display="block";
        page1.style.opacity="1";
        page2.style.display="none";
        page2.style.opacity="0";
        page3.style.display="none";
        page3.style.opacity="0";
        page4.style.display="none";
        page4.style.opacity="0";
        page5.style.display="none";
        page5.style.opacity="0";
        page6.style.display="none";
        page6.style.opacity="0";
     });
     pre.addEventListener("click",function(){
       
      page1.style.display="none";
      page1.style.opacity="0";
      page2.style.display="block";
      page2.style.opacity="1";
      page3.style.display="none";
      page3.style.opacity="0";
      page4.style.display="none";
      page4.style.opacity="0";
      page5.style.display="none";
      page5.style.opacity="0";
      page6.style.display="none";
      page6.style.opacity="0";
   });
   se.addEventListener("click",function(){
       console.log("jscjbdc");
       page1.style.display="none";
       page1.style.opacity="0";
       page2.style.display="none";
       page2.style.opacity="0";
       page3.style.display="block";
       page3.style.opacity="1";
       page4.style.display="none";
       page4.style.opacity="0";
       page5.style.display="none";
       page5.style.opacity="0";
       page6.style.display="none";
       page6.style.opacity="0";
    });
    abl.addEventListener("click",function(){
       page1.style.display="none";
       page1.style.opacity="0";
       page2.style.display="none";
       page2.style.opacity="0";
       page3.style.display="none";
       page3.style.opacity="0";
       page4.style.display="block";
       page4.style.opacity="1";
       page5.style.display="none";
       page5.style.opacity="0";
       page6.style.display="none";
       page6.style.opacity="0";
    });
    all.addEventListener("click",function(){
       page1.style.display="none";
       page1.style.opacity="0";
       page2.style.display="none";
       page2.style.opacity="0";
       page3.style.display="none";
       page3.style.opacity="0";
       page4.style.display="none";
       page4.style.opacity="0";
       page5.style.display="block";
       page5.style.opacity="1";
       page6.style.display="none";
       page6.style.opacity="0";
    });
   col.addEventListener("click",function(){
       page1.style.display="none";
       page1.style.opacity="0";
       page2.style.display="none";
       page2.style.opacity="0";
       page3.style.display="none";
       page3.style.opacity="0";
       page4.style.display="none";
       page4.style.opacity="0";
       page5.style.display="none";
       page5.style.opacity="0";
       page6.style.display="block";
       page6.style.opacity="1";
    });
    ho.addEventListener("click",function(){
      page1.style.display="block";
      page1.style.opacity="1";
      page2.style.display="none";
      page2.style.opacity="0";
      page3.style.display="none";
      page3.style.opacity="0";
      page4.style.display="none";
      page4.style.opacity="0";
      page5.style.display="none";
      page5.style.opacity="0";
      page6.style.display="none";
      page6.style.opacity="0";
   });
   
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true, // Enable smooth scrolling
      // Add more options as needed
  });

  function swipe(){
   const mediaQuery = window.matchMedia('(max-width: 600px)');

if (mediaQuery.matches) {
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.6,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
} else {
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.8,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
  }

function bar(){
   var nav = document.querySelector(".nav2 h2 i");
   var over = document.querySelector(".overflower");
   var isOpen = false;
   
   nav.addEventListener("click", function(){
       if (!isOpen) {
           over.style.top = "0%";
           isOpen = true;
       } else {
           over.style.top = "-100%";
           isOpen = false;
       }
   });
}


