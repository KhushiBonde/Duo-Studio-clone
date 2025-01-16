function scrolltrigger(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
scrolltrigger();


function Toggle(){
const toggleOpen = document.querySelector(".rightnavcircle");
const toggleClose = document.querySelector(".closetoggle");
const toggle = document.querySelector(".toggle");

 if (toggleOpen && toggleClose && toggle) {
    toggleOpen.addEventListener('click', () => {
        toggle.style.display = 'flex';
        gsap.fromTo(toggle, 
            { 
                x: "100%",
                opacity: 0
            },
            { 
                x: "0%",
                opacity: 1,
                duration: 0.7, 
                ease: "power1.inOut"
            }
        );
    });
    
    toggleClose.addEventListener('click', () => {
        gsap.to(toggle, {
            x: "100%", 
            opacity: 0,
            duration: 0.7, 
            ease: "power1.inOut",
            onComplete: () => {
                toggle.style.display = 'none';
             }
        });
    });
} else {
    console.error("One or more elements not found");
}
}
Toggle();

var cursor = document.querySelector(".cursor");
document.querySelector(".main").addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x+20+"px",
        y:dets.y+20+"px"
    })
})
document.querySelector(".main").addEventListener("mouseenter",(dets)=>{
    cursor.style.display="flex"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
document.querySelector(".main").addEventListener("mouseleave",(dets)=>{
    cursor.style.display="none"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
document.querySelector(".main video").addEventListener("mouseover",(dets)=>{
    cursor.style.width="70px"
    cursor.style.height="20px"
    cursor.style.borderRadius="12px"
    cursor.innerHTML="Play"
    cursor.style.justifyContent="center"
    cursor.style.paddingTop="5px"
    cursor.style.fontSize="10px"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
document.querySelector(".main video").addEventListener("mouseleave",(dets)=>{
    cursor.style.width="20px"
    cursor.style.height="20px"
    cursor.style.borderRadius="50%"
    cursor.innerHTML=""
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 30%",
        end:"top 0",
        scrub:1
    }
})

tl.to(".page1 .heading1",{
    x: -100,
    duration:0.7
},"same1")
tl.to(".page1 .heading2",{
    x: 100,
    duration:0.7
},"same1")
tl.to(".page1 .videoHeading",{
    width:"90%",
    duration:1
},"same1")
tl.to(".page1 video",{
    width:"90%",
    duration:1
},"same1")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        start:"top -120%",
        end:"top -160%",
        scrub:1
    }
});
tl2.to(".main",{
    backgroundColor:"white"
})
tl2.from(".page2 h1",{
    y:100,
    opacity:0,
    duration:4,
    ease: "easeOut"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top -190%",
        end:"top -110%",
        scrub:1
    }
});
tl3.to(".main",{
    backgroundColor:"#0f0d0d"
})

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:".main",
        start:"top -15%",
        end:"top -45%",
        scrub:1
    }
})

var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:".main",
        start:"top -50%",
        end:"top -200%",
        scrub:1
    }
})

gsap.from(".page3 h1",{
    x:"-100",
    opacity:0,
    duration:1,
    ease:"easeOut",
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:".main",
        start:"top 20%",
        end:"top 100%",
        scrub:1
    }
},"animation2")

tl4.fromTo(".page3part1 img",
    {
    x:"-100",
    opacity:0,
    duration:2,
    ease: "power1.inOut"
    },
    {
        x:"50",
    duration:2,
    opacity:1,
    ease: "power1.inOut"
    },
    "animation2"
)
tl4.fromTo(".page3part1 video",
    {
    x:"100",
    opacity:0,
    duration:2,
    ease: "power1.inOut"
    },
    {
        x:"-50",
    duration:2,
    opacity:1,
    ease: "power1.inOut"
    },
    "animation2"
)

tl5.fromTo(".page3part2 img",
    {
    x:"-100",
    opacity:0,
    duration:2,
    ease: "power1.inOut"
    },
    {
        x:"50",
    duration:2,
    opacity:1,
    ease: "power1.inOut"
    },
    "animation3"
)
tl5.fromTo(".page3part2 video",
    {
    x:"100",
    opacity:0,
    duration:4,
    ease: "power1.inOut"
    },
    {
        x:"-50",
    duration:4,
    opacity:1,
    ease: "power1.inOut"
    },
    "animation3"
)



var element = document.querySelectorAll(".elem2");
element.forEach(function(elem){
    var attr = elem.getAttribute("data-image")
    elem.addEventListener('mouseenter',(dets)=>{
        cursor.style.width="300px"
        cursor.style.height="300px"
        cursor.style.borderRadius="0%"
        cursor.style.zIndex="999"
        // attr.style.objectFit="cover"
        // attr.style.objectPosition="center"
        cursor.style.backgroundImage=`url(${attr})`
    })
    elem.addEventListener('mouseleave',(dets)=>{
        cursor.style.width="20px"
        cursor.style.height="20px"
        cursor.style.borderRadius="50%"
        cursor.style.backgroundImage="none"
    })
});
