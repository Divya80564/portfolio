const video=
document.getElementById('myvideo');
const image=
document.getElementById('video_image');
video.onended=()=>{
    video.style.display='none';
    image.style.display='block';
};