gsap.to("#box1", {
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"red",
    scale:0.5,
    borderRadius:"50%"
})

gsap.from("#box2", {
    x:500,
    duration:2,
    delay:1,
    rotate:360,
    scale:.5,
    borderRadius:"50%",
    backgroundColor:"blue",
})

gsap.to("img", {
    rotate:360,
    duration:3,
    delay:1,
    scale:1,
    borderRadius:"50%",
})

gsap.from("h2",{
    y:500,
    duration:2,
    delay:1,
})

gsap.from("p",{
    y:500,
    duration:2,
    delay:1,
    color:"red"
})

gsap.from("h1", {
    opacity:0,
    y:30,
    duration:1,
    delay:1,
    color:red,
    stagger:1

})

