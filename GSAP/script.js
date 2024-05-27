
let cursor = document.querySelector('#cursor');
let main = document.querySelector('#main');
document.addEventListener('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.x + 10,
        y: e.y,
        duration: 0.5,
        trasnform: 'translate(-50%, -50%)',
    })  
});

let heading = document.querySelectorAll('h1');
heading.forEach(function (h1){
    h1.addEventListener('mouseenter', function (e) {
        gsap.to(cursor, {
            scale: 7
        })
    });
    h1.addEventListener('mouseleave', function (e) {
        gsap.to(cursor, {
            scale: 1
        })
    });
});
let list = document.querySelectorAll('ul li');
list.forEach(function (li){
    li.addEventListener('mouseenter', function (e) {
        gsap.to(cursor, {
            scale: 4
        })
    });
    li.addEventListener('mouseleave', function (e) {
        gsap.to(cursor, {
            scale: 1
        })
    });
});


gsap.from('#page2 h1', {
    x: 3000,
    opacity: 0,
    duration: 1,
    yoyo: true,
    scrollTrigger:{
        // markers: true,
        start: '50%',
    }
});


document.addEventListener('mouseleave', function (e) {
    cursor.style.display = 'none';
});
document.addEventListener('mousemove', function (e) {
    cursor.style.display = 'block';
});



let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menuBtn');
let crossBtn = document.querySelector('.crossBtn');
let visible = true;


let time = gsap.timeline();
time.from(menu, {
    x:1000,
    delay: 1,
    duration: 3,
    opacity: 0,
})

time.pause();

let btn = document.querySelectorAll('.btn');
btn.forEach(function (b){
    b.addEventListener('click',()=>{
        if(visible) {
            menuBtn.style.display = 'none';
            crossBtn.style.display = 'block';
            visible = false;
            menu.style.display = 'block';
            time.play();
        }
        else{
            menuBtn.style.display = 'block';
            crossBtn.style.display = 'none';
            visible = true;
            menu.style.display = 'none';
            time.reverse();
        }
    });
});






