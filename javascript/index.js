const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let idx = 0;


let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    // console.log(idx);

    if (idx > img.length - 1) {
        idx = 0;
        // console.log(idx);
    } else if (idx < 0) {
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${idx * -500}px)`;
}


leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
})

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}


rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
})
