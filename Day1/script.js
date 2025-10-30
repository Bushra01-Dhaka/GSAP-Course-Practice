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