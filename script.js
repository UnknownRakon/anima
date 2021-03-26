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
console.log(play, img)
play.onclick = function() {
    img.classList.toggle('stop')
    }

