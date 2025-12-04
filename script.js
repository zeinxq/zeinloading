const bgMedia = document.getElementById('bg-media');
const brandLogoImg = document.getElementById('brand-logo-img');
const serverNameText = document.getElementById('server-name-text');
const trackNameEl = document.getElementById('track-name');
const artistNameEl = document.getElementById('artist-name');
const albumCoverEl = document.getElementById('album-cover');
const playIcon = document.getElementById('play-icon');
const playlistDropdown = document.getElementById('playlist-dropdown');
const overlay = document.getElementById('click-overlay');
const volSlider = document.getElementById('volume-slider');
const volIcon = document.getElementById('vol-icon');

if(config.brandLogo) brandLogoImg.src = config.brandLogo;
if(config.serverName) serverNameText.innerText = config.serverName;

if (config.background.type === 'video') {
    bgMedia.innerHTML = `<video autoplay loop muted><source src="${config.background.videoFile}" type="video/webm"></video>`;
} else {
    let bgIndex = 0;
    function cycleBg() {
        bgMedia.innerHTML = `<img src="${config.background.images[bgIndex]}" style="width:100%; height:100%; object-fit:cover; animation: fadeIn 1.5s;">`;
        bgIndex = (bgIndex + 1) % config.background.images.length;
    }
    cycleBg();
    setInterval(cycleBg, config.background.interval);
}

let trackIndex = 0;
let audio = new Audio();
let isPlaying = false;
let lastVolume = config.musicVolume;

audio.volume = config.musicVolume;
volSlider.value = config.musicVolume;

function loadTrack(index) {
    const track = config.musicList[index];
    audio.src = track.file;
    trackNameEl.innerText = track.title;
    artistNameEl.innerText = track.artist;
    albumCoverEl.style.backgroundImage = `url('${track.cover}')`;
    renderPlaylist();
}

function renderPlaylist() {
    playlistDropdown.innerHTML = '';
    config.musicList.forEach((track, i) => {
        let activeClass = (i === trackIndex) ? 'active' : '';
        playlistDropdown.innerHTML += `
            <div class="playlist-item ${activeClass}" onclick="playSpecific(${i})">
                <i class="fa-solid fa-music"></i><span>${track.title}</span>
            </div>
        `;
    });
}

function playSpecific(i) { trackIndex = i; loadTrack(trackIndex); playSong(); }
function togglePlay() { if (isPlaying) { audio.pause(); playIcon.className = 'fa-solid fa-play'; } else { audio.play(); playIcon.className = 'fa-solid fa-pause'; } isPlaying = !isPlaying; }
function playSong() { audio.play(); isPlaying = true; playIcon.className = 'fa-solid fa-pause'; }
function nextSong() { trackIndex = (trackIndex + 1) % config.musicList.length; loadTrack(trackIndex); if(isPlaying) audio.play(); }
function prevSong() { trackIndex = (trackIndex - 1 + config.musicList.length) % config.musicList.length; loadTrack(trackIndex); if(isPlaying) audio.play(); }
function togglePlaylist() { playlistDropdown.classList.toggle('active'); }

volSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    audio.volume = val;
    updateVolIcon(val);
});

function toggleMute() {
    if (audio.volume > 0) {
        lastVolume = audio.volume;
        audio.volume = 0;
        volSlider.value = 0;
    } else {
        audio.volume = lastVolume > 0 ? lastVolume : 0.15;
        volSlider.value = audio.volume;
    }
    updateVolIcon(audio.volume);
}

function updateVolIcon(val) {
    if (val == 0) volIcon.className = "fa-solid fa-volume-xmark";
    else if (val < 0.5) volIcon.className = "fa-solid fa-volume-low";
    else volIcon.className = "fa-solid fa-volume-high";
}

document.addEventListener('click', () => { if(!isPlaying) togglePlay(); }, { once: true });
loadTrack(0);

function openModal(modalId) { closeAllModals(); document.getElementById(modalId).classList.add('active'); overlay.classList.add('active'); document.body.classList.add('modal-open'); }
function closeAllModals() { document.querySelectorAll('.custom-modal').forEach(m => m.classList.remove('active')); overlay.classList.remove('active'); document.body.classList.remove('modal-open'); }

const galleryContent = document.getElementById('gallery-content');
config.galleryImages.forEach(src => { galleryContent.innerHTML += `<img src="${src}" class="mini-img" onclick="openLightbox('${src}')">`; });
const changelogContent = document.getElementById('changelog-content');
config.changelog.forEach(item => { changelogContent.innerHTML += `<div class="log-item"><div class="log-title">${item.title}</div><div class="log-desc">${item.desc}</div></div>`; });
const staffContent = document.getElementById('staff-content');
config.staff.forEach(person => { staffContent.innerHTML += `<div class="staff-item"><img src="${person.avatar}" class="staff-avatar"><div class="staff-info"><h4>${person.name}</h4><span>${person.role}</span></div></div>`; });

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
function openLightbox(src) { lightboxImg.src = src; lightbox.classList.add('active'); }
function closeLightbox() { lightbox.classList.remove('active'); }

window.addEventListener('message', (e) => {
    if (e.data.eventName === 'loadProgress') {
        const percent = parseInt(e.data.loadFraction * 100);
        document.getElementById('progress-fill').style.width = `${percent}%`;
        document.getElementById('loading-percent').innerText = `${percent}%`;
        if(percent < 30) document.getElementById('loading-text').innerText = "Varlıklar...";
        else if(percent < 70) document.getElementById('loading-text').innerText = "Harita...";
        else document.getElementById('loading-text').innerText = "Giriş Yapılıyor...";
    }
});