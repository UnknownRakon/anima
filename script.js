function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    })
  }

loadData()
    .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
    });

const play = document.getElementById("play");
const img = document.getElementById("dragon");
play.onclick = function() {
    img.classList.toggle('stop')
    }


  // AnimeJS
var relativeEl = document.querySelector('.anime');
relativeEl.onclick = function(){
  relativeEl.style.transform = 'translateX(100px)';
  anime({
      targets: '.anime',
      translateX: {
        value: '*=10', // 100px * 2.5 = '250px'
        duration: 1000
      },
      width: {
        value: '-=20px', // 28 - 20 = '8px'
        duration: 1800,
        easing: 'easeInOutSine'
      },
      rotate: {
        value: '+=2turn', // 0 + 2 = '2turn'
        duration: 1800,
        easing: 'easeInOutSine'
      },
      direction: 'alternate'
    });
}

var sun = document.getElementById('sun')
sun.onclick = function() {
  let start = Date.now();
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    sun.style.top = timePassed / 5 + 'px';
    if (timePassed > 3000) clearInterval(timer);
  }, 20);
}