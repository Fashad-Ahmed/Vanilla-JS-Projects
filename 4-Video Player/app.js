const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


toggleStatus = () => {
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

updatePlayIcon = () => {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
      } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
      }
}

updateProgress = () => {
    progress.value = (video.currenTime / video.duration) * 100;

    let minutes = Math.floor(video.currenTime / 60);
    if(minutes < 10){
        minutes = '0' + String(minutes);
    }
    
    let seconds = Math.floor(video.currenTime % 60);
    if(seconds < 10){
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

videoProgress = () => {
    video.currenTime = (+progress.value * video.duration) / 100;
}

stopVideo = () => {
    video.currenTime = 0;
    video.pause();
}

//  Event Listeners

video.addEventListener('click', toggleStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', videoProgress);