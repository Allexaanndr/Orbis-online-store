const videoIconsContainer = document.querySelector('.video-icons'),
    lifestyleVideo = document.querySelector('#lifestyle-video'),
    progressBar = document.querySelector('.lifestyle-progressbar'),
    playButton = videoIconsContainer.querySelector('.video-icons__play'),
    pauseButton = videoIconsContainer.querySelector('.video-icons__pause'),
    leftButton = videoIconsContainer.querySelector('.video-icons__left'),
    rightButton = videoIconsContainer.querySelector('.video-icons__right');


videoIconsContainer.addEventListener('click', function (event) {
    const targetIcon = event.target.dataset.video;

    if (targetIcon == 'play' || event.target.closest('.video-icons__play')) {
        lifestyleVideo.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    }

    switch (targetIcon) {
        case 'pause':
            lifestyleVideo.pause();
            pauseButton.style.display = 'none';
            playButton.style.display = 'inline-block';
            break;
        case 'left':
            lifestyleVideo.currentTime -= 5;
            break;
        case 'right':
            lifestyleVideo.currentTime += 5;
            break;
    }

})

// Look time at the video
lifestyleVideo.addEventListener('timeupdate', function () {
    document.querySelector('#line').style.width =
        (100 / lifestyleVideo.duration * lifestyleVideo.currentTime) + '%';

    if (lifestyleVideo.ended) {
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
    }
})

// Click on the video progressbar
progressBar.addEventListener('mousedown', function (event) {
    const pos = (event.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
    lifestyleVideo.currentTime = pos * lifestyleVideo.duration;
    console.log(this.offsetWidth);

})