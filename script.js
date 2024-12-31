let crs = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crs.style.left = dets.x+30 +"px"
    crs.style.top = dets.y+"px"
    blur.style.left = dets.x- 250 +"px"
    blur.style.top = dets.y- 250+"px"
})

let h4All=  document.querySelectorAll("#nav h4")
h4All.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crs.style.scale = 3;
        crs.style.border = "1px solid #ffffff";
        crs.style.backgroundColor = "transparent";
    });

    elem.addEventListener("mouseleave", function(){
        crs.style.scale = 1;
        crs.style.border = "0px solid #95C11E";
        crs.style.backgroundColor = "#95C11E";
    });
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }    
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
});  



gsap.from("#page5 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page5 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

