let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let hill5 = document.getElementById('hill5')

window.addEventListener('scroll', () => {
    let value = window.scrollY
    let prev = window.scrollY

    const current = window.scrollY
    if (prev > current ) {
        document.querySelector('header').classList.add('show')
    } else {
        document.querySelector('header').classList.remove('show')
    }

    prev = current;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});

// // keep track of previous scroll position
// let prevScrollPos = window.pageYOffset;

// window.addEventListener('scroll', function() {
//   // current scroll position
//   const currentScrollPos = window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     // user has scrolled up
//     document.querySelector('.navbar').classList.add('show');
//   } else {
//     // user has scrolled down
//     document.querySelector('.navbar').classList.remove('show');
//   }

//   // update previous scroll position
//   prevScrollPos = currentScrollPos;
// });
