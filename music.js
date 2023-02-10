let all_music_list_btn = document.querySelector('.container .play-pause-btns #music-list-btn');
let all_music_list_box = document.querySelector('.container .all-music-list');
let list_close_icon = document.querySelector('.container .all-music-list #list-close-icon');
let music_name = document.querySelector('.container .music-title');
let music_artist = document.querySelector('.container .music-artist');
let music_img = document.querySelector('.container #music-img');
let music = document.querySelector('.container #music');

let music_index = 1;

all_music_list_btn.addEventListener('click', () => {
    all_music_list_box.style.bottom = '0px';
})

list_close_icon.addEventListener('click', () => {
    all_music_list_box.style.bottom = '-400px';
})

// load music on window load

let loadMusic = (music_index) => {
    music_name.innerHTML = `${allmusic[music_index - 1].name}`;
    music_artist.innerHTML = `${allmusic[music_index - 1].artist}`;
    music_img.src = `${allmusic[music_index - 1].img}.jpg`;
    musicBackgroundImage.src = `${allmusic[music_index - 1].img}.jpg`;
    music.src = `${allmusic[music_index - 1].src}.mp3`;
}

play_pause_btn.addEventListener('click', () => {
    if (play_pause_btn.classList.contains('play')) {
        play_pause_btn.classList.remove('play');
        play_pause_btn.classList.add('paused');
        play_pause_btn.innerHTML = 'pause_arrow';
        music.play();
    } else {
        play_pause_btn.classList.remove('paused');
        play_pause_btn.classList.add('play');
        play_pause_btn.innerHTML = 'play_arrow';
        music.pause();
    }
    playingNow();
})
