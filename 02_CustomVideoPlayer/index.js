const video = document.getElementById('video')
console.log(video.attributes);
console.log(video.duration);
const duration = document.getElementById('duration')
const currentTime = document.getElementById('pblabel')
const pb = document.getElementById('pb')
const playPause =()=>{
    console.log('playPause');
    if (video.paused){
        console.log(video.paused);
        video.play()
    }else{
        video.pause()
    }
    duration.innerText = (video.currentTime / video.duration) * 100;
    console.log(video.duration);
    console.log(video.currentTime);
    console.log(video.timeupdate());
    // pb.max = video.duration
} 
const toggleVideoStatus = ()=>{
    if (video.paused){
        console.log(video.paused);
        video.play()
    }else{
        video.pause()
    }
}
video.addEventListener('click',toggleVideoStatus)
video.addEventListener('timeupdate',()=>{
    currentTime.innerText = video.currentTime
    var hours=parseInt(video.currentTime/(60*60),10);
    var minutes = parseInt(video.currentTime / 60, 10);
    var seconds = video.currentTime % 60;
    if (hours==0) { 
        currentTime.innerHTML=minutes+":"+seconds.toFixed(0)
    } else { 
        currentTime.innerHTML=hours+":"+minutes+":"+seconds.toFixed(0)
    }
    pb.value = video.currentTime
})

// change the progress bar sync with video
const setVideoProgress = ()=>{
    video.currentTime = (+pb.value*video.duration)/100
}
pb.addEventListener('change',setVideoProgress)


const makeBig = ()=>{
    // console.log('Bigger')
    video.width =  560
}

const makeSmall = ()=>{
    // console.log('small')
    video.width =  320
}

const makeNormal = ()=>{
    // console.log('normal')
    video.width =  420
}

const restart = ()=>{
    video.currentTime =0
    video.load()
}
