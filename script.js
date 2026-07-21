const songs = [
    { id: 1, title: "Aaya Re Toofan", artist: "Khesari Lal", src: "songs/1.mp3", img: "images/1.jpg", duration: "4:39", category: "trending" },
    { id: 2, title: "darkhast", artist: "Arijit Singh", src: "songs/2.mp3", img: "images/2.jpg", duration: "6:14", category: "sad" },
    { id: 3, title: "sathiya x Mashup", artist: "Mashup", src: "songs/3.mp3", img: "images/3.jpg", duration: "3:44", category: "trending" },
    { id: 4, title: "Jaane Tu", artist: "A. R. Rahman", src: "songs/4.mp3", img: "images/4.jpg", duration: "4:44", category: "sad" },
    { id: 5, title: "Jo Tum Mere Ho", artist: "Jubin Nautiyal", src: "songs/5.mp3", img: "images/5.jpg", duration: "4:11", category: "sad" },
    { id: 6, title: "Khoobsurat", artist: "Kunal Ganjawala", src: "songs/6.mp3", img: "images/6.jpg", duration: "4:04", category: "trending" },
    { id: 7, title: "maiya", artist: "Unknown", src: "songs/7.mp3", img: "images/7.jpg", duration: "3:42", category: "sad" },
    { id: 8, title: "Naacho-Naacho", artist: "M. M. Keeravani", src: "songs/8.mp3", img: "images/8.jpg", duration: "3:34", category: "trending" },
    { id: 9, title: "Saathiya", artist: "Sonu Nigam", src: "songs/9.mp3", img: "images/9.jpg", duration: "5:10", category: "sad" },
    { id: 10, title: "Sun Ri Sakhi", artist: "Alka Yagnik", src: "songs/10.mp3", img: "images/10.jpg", duration: "5:10", category: "sad" },
    { id: 11, title: "Tauba Tauba", artist: "Raju Singh", src: "songs/11.mp3", img: "images/11.jpg", duration: "3:27", category: "trending" },
    { id: 12, title: "Ashiq Surrender Hua", artist: "Amaal Mallik", src: "songs/12.mp3", img: "images/12.jpg", duration: "4:10", category: "trending" },
    { id: 13, title: "Bheegi Si Bhaagi Si", artist: "Mohit Chauhan", src: "songs/13.mp3", img: "images/13.jpg", duration: "4:38", category: "sad" },
    { id: 14, title: "Brown Rang", artist: "Yo Yo Honey Singh", src: "songs/14.mp3", img: "images/14.jpg", duration: "2:29", category: "trending" },
    { id: 15, title: "Chuttamalle", artist: "Unknown", src: "songs/15.mp3", img: "images/15.jpg", duration: "3:44", category: "marathi" },
    { id: 16, title: "Dil Se Dil", artist: "Rahat Fateh Ali Khan", src: "songs/16.mp3", img: "images/16.jpg", duration: "3:32", category: "sad" },
    { id: 17, title: "I'll Never Fall In Love", artist: "Unknown", src: "songs/17.mp3", img: "images/17.jpg", duration: "2:55", category: "sad" },
    { id: 18, title: "Jab Se Tere Naina", artist: "Shaan", src: "songs/18.mp3", img: "images/18.jpg", duration: "4:44", category: "trending" },
    { id: 19, title: "Jhol", artist: "Ajay-Atul", src: "songs/19.mp3", img: "images/19.jpg", duration: "4:25", category: "marathi" },
    { id: 20, title: "Khulke Jeene Ka", artist: "Arijit Singh", src: "songs/20.mp3", img: "images/20.jpg", duration: "4:06", category: "trending" },
    { id: 21, title: "Lut Put Gaya", artist: "Arijit Singh", src: "songs/21.mp3", img: "images/21.jpg", duration: "3:43", category: "trending" },
    { id: 22, title: "Mana Ke Hum Yaar Nahi", artist: "Parineeti Chopra", src: "songs/22.mp3", img: "images/22.jpg", duration: "4:24", category: "sad" },
    { id: 23, title: "Madanmanjiri", artist: "Vaishali Samant", src: "songs/23.mp3", img: "images/23.jpg", duration: "5:59", category: "marathi" },
    { id: 24, title: "Mera Yaar", artist: "B Praak", src: "songs/24.mp3", img: "images/24.jpg", duration: "6:51", category: "sad" },
    { id: 25, title: "O Rangrezz", artist: "Shreya Ghoshal", src: "songs/25.mp3", img: "images/25.jpg", duration: "6:25", category: "trending" },
    { id: 26, title: "O Sita", artist: "A. R. Rahman", src: "songs/26.mp3", img: "images/26.jpg", duration: "4:00", category: "trending" },
    { id: 27, title: "Odiyamma", artist: "A. R. Rahman", src: "songs/27.mp3", img: "images/27.jpg", duration: "3:15", category: "trending" },
    { id: 28, title: "Raanjan", artist: "Papon", src: "songs/28.mp3", img: "images/28.jpg", duration: "4:00", category: "sad" },
    { id: 29, title: "Rajwadi Odhani", artist: "Vaishali Samant", src: "songs/29.mp3", img: "images/29.jpg", duration: "4:00", category: "marathi" },
    { id: 30, title: "Raanjana Ve", artist: "Sukhwinder Singh", src: "songs/30.mp3", img: "images/30.jpg", duration: "4:38", category: "sad" },
    { id: 31, title: "Sallam Aaya", artist: "Shreya Ghoshal", src: "songs/31.mp3", img: "images/31.jpg", duration: "4:53", category: "sad" },
    { id: 32, title: "Taare Gin", artist: "A. R. Rahman", src: "songs/32.mp3", img: "images/32.jpg", duration: "4:17", category: "sad" },
    { id: 33, title: "Tera Mera Rishta", artist: "Mohit Chauhan", src: "songs/33.mp3", img: "images/33.jpg", duration: "4:52", category: "sad" },
    { id: 34, title: "Tere Hawaale", artist: "Arijit Singh", src: "songs/34.mp3", img: "images/34.jpg", duration: "5:46", category: "trending" },
    { id: 35, title: "Teri Deewani", artist: "Kailash Kher", src: "songs/35.mp3", img: "images/35.jpg", duration: "5:24", category: "sad" },
    { id: 36, title: "The Naari Naari Song", artist: "Sachin-Jigar", src: "songs/36.mp3", img: "images/36.jpg", duration: "3:17", category: "trending" }
];

// Local Storage for user data and favorites
let favoriteSongIds = JSON.parse(localStorage.getItem("favorites")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentAudio = null;
let currentSongIndex = -1;
let currentPlayingCard = null;

// Player Bar Elements
const playerBar = document.getElementById("player-bar");
const playerImg = document.getElementById("player-img");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const mainPlayBtn = document.getElementById("main-play-btn");
const progressBar = document.getElementById("progress-bar");
const volumeSlider = document.getElementById("volume-slider");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("auth-container").style.display = "flex";

    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    document.body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
});

// Theme toggle handler
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    const currentTheme = document.body.classList.contains("light-mode") ? "light-mode" : "dark-mode";
    localStorage.setItem("theme", currentTheme);
    updateThemeIcon(currentTheme);
});

function updateThemeIcon(theme) {
    if (theme === "dark-mode") {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Authentication functions
function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}
function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}
function signupUser() {
    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        alert("This email is already registered. Please login.");
        return;
    }
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can now log in.");
    showLogin();
}
function loginUser() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("username", user.username);
        document.getElementById("auth-container").style.display = "none";
        showWelcomeScreen(user.username);
    } else {
        alert("Invalid email or password.");
    }
}
function showWelcomeScreen(username) {
    const welcomeScreen = document.getElementById("welcome-screen");
    document.getElementById("welcome-username").textContent = username;
    welcomeScreen.style.display = "flex";
    setTimeout(() => {
        welcomeScreen.style.display = "none";
        document.getElementById("main-app").style.display = "block";
        loadSongs();
    }, 3000);
}

// Main functions
function showProfile() {
    const mainApp = document.getElementById("main-app");
    const profilePage = document.getElementById("profile-page");
    const usernameInput = document.getElementById("profile-username");
    
    usernameInput.value = localStorage.getItem("username") || "";

    mainApp.style.display = "none";
    profilePage.style.display = "block";
    playerBar.style.display = "none";
}
function saveProfileName() {
    const newUsername = document.getElementById("profile-username").value.trim();
    if (newUsername === "") {
        alert("Please enter a valid name!");
        return;
    }
    localStorage.setItem("username", newUsername);
    alert("Profile name updated successfully!");
    showAllSongs();
}

function loadSongs(songList = songs) {
    document.getElementById("main-app").style.display = "block";
    document.getElementById("profile-page").style.display = "none";
    
    if(currentAudio && !currentAudio.paused) {
        document.getElementById("player-bar").style.display = "flex";
    }

    const gallery = document.getElementById("music-gallery");
    gallery.innerHTML = "";

    songList.forEach((song) => {
        const isFavorite = favoriteSongIds.includes(song.id);
        const card = document.createElement("div");
        card.classList.add("song-card");
        card.setAttribute("data-id", song.id);

        card.innerHTML = `
            <div class="favorite-icon ${isFavorite ? "active" : ""}" data-id="${song.id}">
                <i class="fas fa-heart"></i>
            </div>
            <img src="${song.img}" alt="${song.title}" />
            <h4>${song.title}</h4>
            <div class="artist">${song.artist}</div>
            <div class="duration">${song.duration}</div>
        `;
        
        card.addEventListener("click", () => {
            const index = songs.findIndex(s => s.id === song.id);
            playSong(index);
        });

        const favoriteIcon = card.querySelector(".favorite-icon");
        favoriteIcon.addEventListener("click", (e) => {
            e.stopPropagation();
            const songId = parseInt(favoriteIcon.getAttribute("data-id"));
            toggleFavorite(songId, favoriteIcon);
        });

        gallery.appendChild(card);
    });
    
    if (currentSongIndex > -1) {
        const playingSong = songs[currentSongIndex];
        const playingCard = document.querySelector(`.song-card[data-id="${playingSong.id}"]`);
        if (playingCard) {
            playingCard.classList.add("playing");
        }
    }
}

function toggleFavorite(songId, iconElement) {
    const index = favoriteSongIds.indexOf(songId);
    if (index > -1) {
        favoriteSongIds.splice(index, 1);
        iconElement.classList.remove("active");
    } else {
        favoriteSongIds.push(songId);
        iconElement.classList.add("active");
    }
    localStorage.setItem("favorites", JSON.stringify(favoriteSongIds));
}

function showFavorites() {
    const favSongs = songs.filter(song => favoriteSongIds.includes(song.id));
    loadSongs(favSongs);
}
function showAllSongs() {
    loadSongs(songs);
}
function showSongsByCategory(category) {
    const filteredSongs = songs.filter(song => {
        if (typeof song.category === 'string') {
            return song.category.toLowerCase() === category.toLowerCase();
        }
        if (Array.isArray(song.category)) {
            return song.category.map(c => c.toLowerCase()).includes(category.toLowerCase());
        }
        return false;
    });
    loadSongs(filteredSongs);
}
function searchSongs(query) {
    const filtered = songs.filter(song =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        (song.artist && song.artist.toLowerCase().includes(query.toLowerCase()))
    );
    loadSongs(filtered);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function playSong(index) {
    if (currentAudio) {
        currentAudio.pause();
    }
    
    if (currentPlayingCard) {
        currentPlayingCard.classList.remove("playing");
    }
    
    const song = songs[index];
    currentAudio = new Audio(song.src);
    currentAudio.play();
    currentSongIndex = index;
    
    currentPlayingCard = document.querySelector(`.song-card[data-id="${song.id}"]`);
    if (currentPlayingCard) {
        currentPlayingCard.classList.add("playing");
    }

    playerBar.style.display = "flex";
    playerImg.src = song.img;
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    mainPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
    currentAudio.addEventListener("timeupdate", () => {
        const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(currentAudio.currentTime);
    });
    currentAudio.addEventListener("loadedmetadata", () => {
        totalTimeDisplay.textContent = formatTime(currentAudio.duration);
    });
    currentAudio.onended = () => {
        mainPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        playerBar.classList.add("paused");
        
        if (currentPlayingCard) {
            currentPlayingCard.classList.remove("playing");
        }
        currentAudio = null;
        currentSongIndex = -1;
    };
    playerBar.classList.remove("paused");
}

mainPlayBtn.addEventListener("click", () => {
    if (currentAudio) {
        if (currentAudio.paused) {
            currentAudio.play();
            mainPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playerBar.classList.remove("paused");
        } else {
            currentAudio.pause();
            mainPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
            playerBar.classList.add("paused");
        }
    }
});

progressBar.addEventListener("input", () => {
    if (currentAudio) {
        const newTime = (progressBar.value / 100) * currentAudio.duration;
        currentAudio.currentTime = newTime;
    }
});

volumeSlider.addEventListener("input", (e) => {
    if (currentAudio) {
        currentAudio.volume = e.target.value / 100;
    }
});

prevBtn.addEventListener("click", () => {
    if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentSongIndex < songs.length - 1) {
        playSong(currentSongIndex + 1);
    }
});