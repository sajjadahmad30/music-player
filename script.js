const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    { title: 'Song 1', artist: 'Artist 1', src: './audio/audio.imp3.mpeg' },
    { title: 'Song 2', artist: 'Artist 2', src: './audio/audio2.imp3.mpeg' },
    { title: 'Song 3', artist: 'Artist 3', src: './audio/audio3.imp3.mpeg' }
];

let currentSongIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.innerText = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = 'Play';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

playBtn.addEventListener('click', () => {
    const isPlaying = !audio.paused;
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Load the initial song
loadSong(songs[currentSongIndex]);
