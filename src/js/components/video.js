const videoBlock = document.querySelector('.made-modal__video-block');

if (videoBlock) {
  const video = videoBlock.querySelector('.made-modal__video');
  const playBtn = videoBlock.querySelector('.made-modal__video-play');
  playBtn.addEventListener('click', () => {
    videoBlock.classList.add('play');
    video.play();
    video.controls = true;
    playBtn.classList.add('play');
  })
  video.onpause = function () {
    videoBlock.classList.remove('play');
    video.controls = false;
    playBtn.classList.remove('play');
  }
}
