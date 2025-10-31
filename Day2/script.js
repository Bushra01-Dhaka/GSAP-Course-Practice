gsap.from("h1", {
    y:20,
    duration:1,
    delay:1,
    opacity:0,
    color:"red",
    stagger:1,
    
})

gsap.to("#box1", {
    x:800,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true
})