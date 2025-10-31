var tl = gsap.timeline();


tl.from("h2", {
    opacity:0,
    y:30,
    duration:2,
    delay:1,
    scale:1
})

tl.from("h4", {
    opacity:0,
    y:20,
    duration:1,
    scale:.5,
    stagger:1
})

tl.from("h1", {
    opacity:0,
    duration:2,
    color:"green",
    scale:.2
})