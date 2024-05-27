function HomeAnimation() {

    let homeClutter = "";
    document.querySelector(".herotoptext")
        .textContent.split('')
        .forEach((letter) => {
            if (letter === " ") homeClutter += `<span>&nbsp;</span>`;
            homeClutter += `<span>${letter}</span>`;
        })
    document.querySelector(".herotoptext").innerHTML = homeClutter;

    gsap.set(".all-row", { scale: 5 });
    gsap.set(".herotoptext span", { opacity: .1 });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
        }
    });
    tl
        .to('.videodiv', {
            "--clip": "0%",
        }, 'paraToAnimateAtSameTime')
        .to('.all-row', {
            scale: 1,
        }, 'paraToAnimateAtSameTime')
        .to('.first', {
            x: 200,
            stagger: .02,
        }, 'rowPara')
        .from('.second', {
            x: -100,
            stagger: .01,
        }, 'rowPara')
        .to('.third', {
            x: 300,
            stagger: .03,
        }, 'rowPara')
        .from('.fourth', {
            x: -50,
            stagger: .04,
        }, 'rowPara')
        .to(".herotoptext span", {
            opacity: 1,
            stagger: .006,
        }, 'rowPara')
}
function SlideAnimation() {

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".slides",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
        }
    });
    tl1
        .to(".slides", {
            xPercent: -300,
            ease: Power4,
        }, 'newPara')
        .to(".slide-3-icons-1", {
            x: 100
        }, 'newPara')

}
function TeamAnimation() {
    document.querySelectorAll('.listele').forEach((elem) => {
        let picture = elem.querySelector('.picture');
        let bluelayer = elem.querySelector('.bluelayer');
        elem.addEventListener('mousemove', (e) => {
            gsap.to(bluelayer, {
                height: '100%',
                duration: .3
            }, 'aa')
            gsap.to(picture, {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -150, 150, e.clientX),
                y: gsap.utils.mapRange(0, window.innerWidth, -50, 50, e.clientY),
                duration: .3
            }, 'aa')
        })
        elem.addEventListener('mouseleave', (e) => {
            gsap.to(picture, {
                opacity: 0,
                duration: .3
            }, 'bb')
            gsap.to(bluelayer, {
                height: 0,
                duration: .3
            }, 'bb')
        })
    })
}
function CommentsAnimation() {
    let clutter = "";
    document.querySelector('.comment-first')
        .textContent.split("")
        .forEach((letter) => {
            if (letter === " ") clutter += `<span>&nbsp;</span>`;
            clutter += `<span>${letter}</span>`;
        })
    document.querySelector('.comment-first').innerHTML = clutter;

    gsap.set(".comment-first span", { opacity: .1 });
    gsap.to(".comment-first span", {
        scrollTrigger: {
            trigger: ".comment-1",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1,
        },
        opacity: 1,
        stagger: .03,
        ease: Power4,
    });

    clutter = "";
    document.querySelector('.comment-second')
        .textContent.split("")
        .forEach((letter) => {
            if (letter === " ") clutter += `<span>&nbsp;</span>`;
            clutter += `<span>${letter}</span>`;
        })
    document.querySelector('.comment-second').innerHTML = clutter;

    gsap.set(".comment-second span", { opacity: .1 });
    gsap.to(".comment-second span", {
        scrollTrigger: {
            trigger: ".comment-2",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1,
        },
        opacity: 1,
        stagger: .03,
        ease: Power4,
    });
}
function locoMotive() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function CapsuleAnimation() {
    gsap.to(".capsule-1", {
        scrollTrigger: {
            trigger: ".capsule-container",

            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4,
    }, "same-scroll");
    gsap.to(".capsule-2", {
        scrollTrigger: {
            trigger: ".capsule-container",

            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
        },
        x: 0,
        ease: Power4,
    }, "same-scroll");
}
function BodyColorChangeAnimation() {
    let overlay = document.querySelector('.overlay');
    document.querySelectorAll('.parent')
        .forEach((parent) => {
            ScrollTrigger.create({
                trigger: parent,
                start: "top 50%",
                end: "bottom 50%",

                onEnter: function () {
                    let color = parent.dataset.color;
                    document.body.setAttribute('theme', color);
                    overlay.style.backgroundColor = color;

                },
                onEnterBack: function () {
                    let color = parent.dataset.color;
                    document.body.setAttribute('theme', color);
                    overlay.style.backgroundColor = color;
                }
            })
        })
}
function NavColChangeAnimation() {
    let navbar = document.querySelector('.navbar');
    let overlay = document.querySelector('.overlay');
    let body = document.querySelector('.main');
    navbar.addEventListener('mouseenter', function(){
        overlay.style.opacity = .9;
        overlay.classList.remove('hidden');
        body.style.overflow = 'hidden';
    })
    navbar.addEventListener('mouseleave', function(){
        overlay.classList.add('hidden');
        body.style.overflow = 'visible';
        
    })
    
}

HomeAnimation();
SlideAnimation();
TeamAnimation();
CommentsAnimation();
locoMotive();
CapsuleAnimation();
BodyColorChangeAnimation();
NavColChangeAnimation();