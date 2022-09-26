// console.log("lets write javascript code here")
let audio=new Audio("1.mp3")
// audio.play()
let songindex=0;
let play=document.getElementById("play")
let progressbar=document.getElementById("myprogressbar")
let gif=document.getElementById("gif")
let songitem=Array.from(document.getElementsByClassName("songitem"))
 

let songs=[
    {songn:"suraj-duba-hai",filepath:"1.mp3"},
    {songn:"kesariya",filepath:"1.mp3"},
    {songn:"dhoom again",filepath:"1.mp3"},
    {songn:"vikram theme",filepath:"1.mp3"},
    {songn:"bad boys",filepath:"1.mp3"},
    {songn:"mai hoon superman",filepath:"1.mp3"},
    {songn:"bhoonath party",filepath:"1.mp3"}

]
// let songname=document.getElementsByClassName("songname")
songitem.forEach((element,i) => {
    // console.log(element,i)
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songn
});

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songplayitem")).forEach((element,i)=>{
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")
});
}

Array.from(document.getElementsByClassName("songplayitem")).forEach((element,i)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllPlay();
        e.target.classList.remove("fa-circle-play")
        let songplayingname=document.getElementById("songplayingname")
        songplayingname.innerHTML=songs[i].songn
        gif.style.opacity=1
        e.target.classList.add("fa-circle-pause")
        audio.src="1.mp3"
        audio.currentTime=0;
        audio.play();
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")
    })
});
// handle play/pause button
play.addEventListener("click",()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play()
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")
        gif.style.opacity=1
    }
    else{
        audio.pause()
        play.classList.remove("fa-circle-pause")
        play.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
})
// logic to update song
audio.addEventListener("timeupdate",()=>{
    // the below will take the duration percentage in progress and update our progress bar
    progress=parseInt((audio.currentTime/audio.duration)*100)
    // console.log(progress)
    progressbar.value=progress
})
progressbar.addEventListener("change",()=>{
    audio.currentTime=progressbar.value*audio.duration/100
})