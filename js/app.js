let zSpacing = -1000,
    lastPos = zSpacing / 5,
    frames = document.querySelectorAll(".frame"),
    //frame = [...$frames],
    zVals = [],
    speedMotion = 5;

frames.forEach(function (frameItem, index) {
    zVals.push(index * zSpacing + zSpacing);
});

window.onscroll = function () {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top;
    lastPos = top;
    frames.forEach(function (frameItem, index) {
        zVals[index] += delta * speedMotion * -1;
        frameItem.style.transform = `translateZ(${zVals[index]}px)`;
        frameItem.style.opacity = zVals[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    });
};

window.scrollTo(0, 1);

//Audio

let soundButton = document.querySelector(".sound-btn"),
    audio = document.querySelector(".audio");
console.log(audio);

soundButton.addEventListener("click", (e) => {
    e.target.classList.toggle("paused");
    audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
    soundButton.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
    audio.pause();
};
