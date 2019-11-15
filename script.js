gsap.from('.anim-1', {
    opacity: 0,
    duration: 1,
    y: -100,
    stagger: .5
});

gsap.from('img', {
    opacity: 0,
    duration: 1.5,
    y: 300,
    delay: 2
});

gsap.from('aside', {
    opacity: 0,
    duration: 1,
    backgroundPosition: '200px 0px',
    delay: 1
});