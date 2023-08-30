const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.1 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener('scroll', () => {  
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  document.querySelector('.pcbh-image').style.width = 100 + scrollTop / 80 + '%';
});


    const imageLinks = document.querySelectorAll('.image-link');
    const imageContainer = document.querySelector('.image-container');
    const hoverImage = document.querySelector('.hover-image');

    imageLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const newImageSrc = link.getAttribute('data-image');
            hoverImage.src = newImageSrc;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry)
            if(entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

