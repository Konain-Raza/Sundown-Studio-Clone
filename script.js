const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem_con= document.querySelector("#main-con")
var fixedimage= document.querySelector("#fixed-image")
elem_con.addEventListener("mouseenter",function(){
    fixedimage.style.display = "block";
})
elem_con.addEventListener("mouseleave",function(){
    fixedimage.style.display = "none";
})

var elems = document.querySelectorAll(".option-con")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixedimage.style.backgroundImage = `url(${image})`
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });