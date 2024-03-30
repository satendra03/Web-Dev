console.log("%ccreated by Satendra Kumar Parteti", "color: white; background-color: royalblue; padding: 0.5em; border: none; border-radius: 50px; font-size: 1em;");

//Songs Data
let songs = [
    {
        name: "Hosanna",
        artist: "A. R. Rahman, Leon D'Souza, and Suzanne D'Mello",
        album: "https://i.scdn.co/image/ab67616d0000b273c36ca28b750c75cc69db40ea",
        url: "./songs/Hosanna.mp3",
        description:
            "Hosanna is a soul-stirring melody from the Bollywood film 'Ekk Deewana Tha', composed by the legendary A. R. Rahman. The track, embellished with the enchanting vocals of Leon D'Souza and Suzanne D'Mello, evokes a profound sense of devotion and love. Rahman's masterful composition, coupled with heartfelt lyrics, creates a musical experience that resonates deeply with listeners, transcending boundaries of language and culture. From its serene opening notes to its stirring crescendo, Hosanna transports listeners to a realm of spiritual transcendence, where love and divinity intertwine. This timeless masterpiece continues to captivate audiences worldwide, leaving an indelible mark on the hearts of all who encounter its ethereal beauty.",
    },
    {
        name: "Har Kisi Ko Nahi Milta Yahan Pyaar Zindagi Mein",
        artist: "Arijit Singh, Neeti Mohan",
        album: "https://i.scdn.co/image/ab67616d0000b27315bdb7a86250e53e8a80163d",
        url: "./songs/Har Kisi Ko Nahi Milta Yahan Pyaar Zindagi Mein.mp3",
        description:
            "Har Kisi Ko Nahi Milta Yahan Pyaar Zindagi Mein is a soul-stirring rendition from the Bollywood movie 'Boss', originally crafted by the legendary duo Kalyanji Anandji. Arijit Singh and Neeti Mohan lend their mesmerizing vocals to breathe new life into this classic gem. The song captures the essence of unrequited love, portraying the longing for affection and the bittersweet emotions that accompany it. With its poignant lyrics and soulful melody, Har Kisi Ko Nahi Milta Yahan Pyaar Zindagi Mein resonates deeply with listeners, evoking a myriad of emotions. Singh and Mohan's emotive rendition adds layers of depth and sincerity to the song, making it an unforgettable musical experience that leaves a lasting impression on the heart.",
    },
    {
        name: "Subhanallah",
        artist: "Shilpa Rao and Sreerama Chandra",
        album: "https://i.scdn.co/image/ab67616d0000b273707ea5b8023ac77d31756ed4",
        url: "./songs/Subhanallah.mp3",
        description:
            "Subhanallah is a soulful track from the Bollywood movie 'Yeh Jawaani Hai Deewani', composed by the acclaimed musician Pritam. This mesmerizing melody, adorned with the enchanting vocals of Shilpa Rao and Sreerama Chandra, captivates listeners with its ethereal beauty. The song's evocative lyrics and haunting melody evoke a sense of wonder and awe, transporting listeners to a realm of divine love and spiritual bliss. With its serene composition and heartfelt vocals, Subhanallah continues to touch the hearts of audiences worldwide, leaving a lasting impression with its timeless charm and profound message of love and devotion.",
    },
    {
        name: "Tu Chahiye",
        artist: "Amitabh Bhattacharya, Atif Aslam, and Shankar–Ehsaan–Loy",
        album: "https://i.scdn.co/image/ab67616d0000b273e7f1ff44b74df429307f4164",
        url: "./songs/Tu Chahiye.mp3",
        description:
            "Tu Chahiye is a soulful rendition from the Bollywood movie 'Bajrangi Bhaijaan', composed by the acclaimed trio Shankar–Ehsaan–Loy. This heartfelt track, featuring the soulful vocals of Atif Aslam and Amitabh Bhattacharya, beautifully captures the essence of longing and yearning for love. The song's poignant lyrics and emotive melody strike a chord with listeners, resonating deeply with the universal theme of love and companionship. With its evocative composition and heartfelt vocals, Tu Chahiye continues to enchant audiences, serving as a timeless reminder of the power of love to transcend boundaries and unite hearts.",
    },
    {
        name: "Ae Dil Hai Mushkil",
        artist: "Arijit Singh, Pritam",
        album: "https://i.scdn.co/image/ab67616d0000b273c8e96da2669b5d51ee36205a",
        url: "./songs/Ae Dil Hai Mushkil.mp3",
        description:
            "Ae Dil Hai Mushkil, the title track of the movie, is a poignant ballad composed by the versatile musician Pritam. Arijit Singh's soulful rendition infuses the song with raw emotion, capturing the tumultuous journey of love and heartbreak. With its haunting melody and evocative lyrics, Ae Dil Hai Mushkil strikes a chord with listeners, resonating deeply with the complexities of human emotions and the fragility of relationships.",
    },
    {
        name: "Ambarsariya",
        artist: "Sona Mohapatra",
        album: "https://i.scdn.co/image/ab67616d0000b2739701faf1c34cc355fd3cd3c0",
        url: "./songs/Ambarsariya.mp3",
        description:
            "Ambarsariya is a captivating Punjabi folk song beautifully rendered by the talented Sona Mohapatra. Originally a traditional Punjabi track, it gained widespread popularity after being featured in the Bollywood movie 'Fukrey'. Mohapatra's soulful rendition, combined with the song's infectious rhythm and catchy melody, makes it a favorite among music lovers.",
    },
    {
        name: "Satranga",
        artist: "Arijit Singh, Shreyas Puranik and Siddharth-Garima",
        album: "https://i.scdn.co/image/ab67616d0000b273021d7017f73387b008eab271",
        url: "./songs/Satranga Ishq.mp3",
        description:
            "Satranga is a soul-stirring track from the Bollywood movie 'Shaadi Mein Zaroor Aana', composed by the talented Arko Pravo Mukherjee. Featuring the soulful vocals of Arijit Singh, Shreyas Puranik, and Siddharth-Garima, the song evokes a range of emotions with its heartfelt lyrics and melodious composition. Satranga beautifully captures the essence of love, longing, and the complexities of relationships, resonating deeply with listeners.",
    },
    {
        name: "Apna Bana Le",
        artist: "Sachin-Jigar and Arijit Singh",
        album: "https://i.scdn.co/image/ab67616d0000b27332a98274c4331c0b0dc07ce4",
        url: "./songs/Apna Bana Le.mp3",
        description:
            "Apna Bana Le is a heartfelt romantic song from the Bollywood movie 'Haseena Parkar', composed by the dynamic duo Sachin-Jigar. Arijit Singh's soulful rendition, coupled with the song's emotive lyrics and melodious composition, beautifully conveys the essence of love and longing. Apna Bana Le strikes a chord with listeners, touching hearts with its sincerity and emotional depth.",
    },
    {
        name: "Channa Ve",
        artist: "Akhil Sachdeva and Mansheel Gujral",
        album: "https://i.scdn.co/image/ab67616d0000b273d3c06cabe1f80f26d369c5ba",
        url: "./songs/Channa Ve.mp3",
        description:
            "Channa Ve is a soulful romantic track from the Bollywood movie 'Sufna', composed by the talented musician B Praak. Featuring the heartfelt vocals of Akhil Sachdeva and Mansheel Gujral, the song captures the essence of love and longing, evoking a range of emotions with its poignant lyrics and melodious composition. Channa Ve resonates deeply with listeners, serving as a heartfelt ode to the power of love and the beauty of human connections.",
    },
    {
        name: "Humsafar",
        artist: "Akhil Sachdeva and Mansheel Gujral",
        album: "https://i.scdn.co/image/ab67616d0000b273fa3617fcd0dd0f23e7174219",
        url: "./songs/Humsafar.mp3",
        description:
            "Humsafar is a romantic ballad from the Bollywood movie 'Badrinath Ki Dulhania', composed by Akhil Sachdeva. Featuring the soulful vocals of Sachdeva and Mansheel Gujral, the song beautifully captures the essence of love and companionship. With its heartfelt lyrics and melodious composition, Humsafar strikes a chord with listeners, evoking a range of emotions with its sincerity and emotional depth.",
    },
    {
        name: "Itni Si Baat Hain",
        artist: "Antara Mitra and Arijit Singh",
        album: "https://i.scdn.co/image/ab67616d0000b273ac47a8ab83d832318df5a9fc",
        url: "./songs/Itni Si Baat Hain.mp3",
        description:
            "Itni Si Baat Hain is a romantic track from the Bollywood movie 'Azhar', composed by the talented musician Amaal Mallik. Featuring the soulful vocals of Arijit Singh and Antara Mitra, the song beautifully captures the essence of love and longing. With its heartfelt lyrics and melodious composition, Itni Si Baat Hain resonates deeply with listeners, evoking a range of emotions with its sincerity and emotional depth.",
    },
    {
        name: "Jab Tak",
        artist: "Amaal Mallik and Armaan Malik",
        album: "https://i.scdn.co/image/ab67616d0000b27302dde7bfff94df00c8b76eb4",
        url: "./songs/Jab Tak.mp3",
        description:
            "Jab Tak is a soul-stirring track from the Bollywood movie 'M.S. Dhoni: The Untold Story', composed by the talented musician Amaal Mallik. Featuring the soulful vocals of Armaan Malik, the song beautifully captures the essence of love, hope, and perseverance. With its heartfelt lyrics and melodious composition, Jab Tak strikes a chord with listeners, inspiring them to embrace life's journey with courage and determination.",
    },
    {
        name: "Jeene Laga Hoon",
        artist: "Atif Aslam and Shreya Ghoshal",
        album: "https://i.scdn.co/image/ab67616d0000b273cab73e6ac9bf4bf3c6931570",
        url: "./songs/Jeene Laga Hoon.mp3",
        description:
            "Jeene Laga Hoon is a romantic track from the Bollywood movie 'Ramaiya Vastavaiya', composed by the talented duo Sachin-Jigar. Atif Aslam and Shreya Ghoshal's mesmerizing vocals breathe life into this enchanting melody, capturing the innocence and euphoria of newfound love. The song's tender lyrics and soothing melody create a dreamy ambiance, evoking a sense of joy and nostalgia in listeners.",
    },
    {
        name: "Aabaad Barbaad",
        artist: "Arijit Singh",
        album: "https://i.scdn.co/image/ab67616d0000b273b67a843ee7de84208f3e4f28",
        url: "./songs/Aabaad Barbaad.mp3",
        description:
            "Aabaad Barbaad is a poignant ballad from the Bollywood movie 'Ludo', composed by Pritam. Arijit Singh's soulful rendition adds depth and emotion to this heartfelt track, portraying the complexities of love and longing. With its haunting melody and evocative lyrics, Aabaad Barbaad resonates deeply with listeners, capturing the fragility and beauty of human emotions.",
    },
    {
        name: "Kaise Hua",
        artist: "Vishal Mishra, Manoj Muntashir",
        album: "https://i.scdn.co/image/ab67616d0000b273c5545f737b16ad5ee767b62a",
        url: "./songs/Kaise Hua.mp3",
        description:
            "Kaise Hua is a soulful melody from the Bollywood movie 'Kabir Singh', composed by Vishal Mishra. This heartwarming track, featuring the heartfelt vocals of Vishal Mishra and Manoj Muntashir, beautifully captures the essence of falling in love. The song's poignant lyrics and evocative melody strike a chord with listeners, evoking a myriad of emotions.",
    },
    {
        name: "Main Agar Kahoon",
        artist: "Shreya Ghoshal and Sonu Nigam",
        album: "https://i.scdn.co/image/ab67616d0000b273675b3f7dea80153c73581e5e",
        url: "./songs/Main Agar Kahoon.mp3",
        description:
            "Main Agar Kahoon is a timeless romantic song from the Bollywood movie 'Om Shanti Om', composed by the maestro duo Vishal-Shekhar. Shreya Ghoshal and Sonu Nigam's melodious vocals infuse the track with passion and emotion, capturing the essence of undying love and devotion. The song's soul-stirring melody and heartfelt lyrics continue to resonate with audiences, making it an enduring favorite among music lovers.",
    },
    {
        name: "Mehrama",
        artist: "Antara Mitra, Darshan Raval, and Pritam Chakraborty",
        album: "https://i.scdn.co/image/ab67616d0000b273095191f6b96fd9eff585befc",
        url: "./songs/Mehrama.mp3",
        description:
            "Mehrama is a soulful track from the Bollywood movie 'Love Aaj Kal', composed by Pritam Chakraborty. Antara Mitra and Darshan Raval's mesmerizing vocals bring out the essence of longing and heartbreak in this poignant melody. The song's haunting lyrics and evocative composition strike a chord with listeners, evoking a sense of melancholy and introspection.",
    },
    {
        name: "O Bedardeya",
        artist: "Arijit Singh",
        album: "https://i.scdn.co/image/ab67616d0000b27360098f31391483986de30b66",
        url: "./songs/O Bedardeya.mp3",
        description:
            "O Bedardeya is a heartfelt ballad from the Bollywood movie 'Sufiyum Sujatayum', composed by M. Jayachandran. Arijit Singh's soulful rendition adds depth and emotion to this poignant track, capturing the pain and longing of unrequited love. The song's haunting melody and evocative lyrics resonate deeply with listeners, evoking a sense of melancholy and introspection.",
    },
    {
        name: "Paniyon Sa",
        artist: "Atif Aslam and Tulsi Kumar",
        album: "https://i.scdn.co/image/ab67616d0000b273c85e9cfe721fb577d79a2b54",
        url: "./songs/Paniyon Sa.mp3",
        description:
            "Paniyon Sa is a romantic track from the Bollywood movie 'Satyameva Jayate', composed by Rochak Kohli. Atif Aslam and Tulsi Kumar's melodious vocals infuse the song with passion and emotion, capturing the essence of love and longing. The song's soul-stirring melody and heartfelt lyrics strike a chord with listeners, evoking a myriad of emotions.",
    },
    {
        name: "Phir Bhi Tumko Chaahunga",
        artist: "Arijit Singh and Shashaa Tirupati",
        album: "https://i.scdn.co/image/ab67616d0000b273aca529b2fdfaabf2f50fc9e3",
        url: "./songs/Phir Bhi Tumko Chaahunga.mp3",
        description:
            "Phir Bhi Tumko Chaahunga is an emotional ballad from the Bollywood movie 'Half Girlfriend', composed by Mithoon. Arijit Singh and Shashaa Tirupati's soulful rendition adds depth and emotion to this poignant track, capturing the intensity and complexity of unrequited love. The song's haunting melody and heartfelt lyrics resonate deeply with listeners, evoking a sense of longing and yearning.",
    },
];

let selectedSong = 0;
let audio = new Audio();

let playingSong = false;

// selecting Media or Player buttons
let backBtn = document.getElementById('backMusic');
let playBtn = document.getElementById('playMusic');
let nextBtn = document.getElementById('nextMusic');

//selecting the song list
let songMainList = document.querySelector("#musicmainlist");
let songOverlayList = document.querySelector('#musicoverlaylist');
let searchSongList = document.querySelector('#searchRes');

// selecting buttons of(menu and music list)
let menuBtn = document.querySelector(".menu");
let musicBtn = document.querySelector(".songlist");
let searchBtn = document.querySelectorAll('.search-Btn');

// selectig cross btns from overlay field
let crossBtnMenu = document.querySelector(".cut-button-menu");
let crossBtnMusic = document.querySelector(".cut-button-music");
let crossBtnSearch = document.querySelector(".cut-button-search");

//selecting overlay fields
let menuOverlay = document.querySelector(".menu-overlay");
let musicOverlay = document.querySelector(".music-overlay");
let searchOverlay = document.querySelector(".search-overlay");
let comingSoonOverlay = document.querySelector(".comingSoon-overlay");

// current song or selected song field
let currentSongField = document.querySelector(".mid");

//input of search bar
let inputField = document.getElementById('searchField');
let searchResults = document.getElementById('searchRes');

// extras
let BeatBlastBtn = document.querySelectorAll('.BeatBlast-Btn');
let homeBtn = document.querySelectorAll('.home-Btn');

let addLibraryBtn = document.getElementById('addLibrary');
let comingSoonBtns = document.querySelectorAll('.comingSoon-btn');

// The Main Function
document.addEventListener("DOMContentLoaded", function () {
    console.log("%ccreated by Satendra Kumar Parteti", "color: white; background-color: royalblue; padding: 0.5em; border: none; border-radius: 50px; font-size: 1em;");
    land();
    showSongs();

    selectSongFromMain();
    selectSongFromOverlay();

    toggleBackBtn();
    togglePlayBtn();
    toggleNextBtn();

    checkbackBtn();
    checknextBtn();

    toggleMenu();
    crossMenu();
    toggleMusic();
    crossMusic();

    clickSearch();
    searchMusic();
    crossSearch();
    selectSongFromSearch();

    nameAndHomeBtnFunction();

    checkClick();

    playNextSong();
});


//loading to html
function land() {
    let selectedSongHTML = "";
    selectedSongHTML += `<div class="current-song">
        <div class="current-song-img">
            <img src=${songs[selectedSong].album} alt="Selected Song">
        </div>
        <div class="current-song-details">
            <div class="current-song-name">${songs[selectedSong].name}</div>
            <div class="current-song-singers">${songs[selectedSong].artist}</div>
            <div class="current-song-description">${songs[selectedSong].description}</div>
        </div>
    </div>`;
    currentSongField.innerHTML = selectedSongHTML;
};
function showSongs() {
    let clutterForMain = "";
    let clutterForOverlay = "";

    songs.forEach(function (obj, index) {
        clutterForMain += `<div data-value="${index}" class="song">
        <div data-value="${index}" class="song-img">
            <img data-value="${index}" src=${obj.album} alt="Song Poster - ${index}">
        </div>
        <div data-value="${index}" class="song-details">
            <div data-value="${index}" class="name">${obj.name}</div>
            <div data-value="${index}" class="details">${obj.artist}</div>
        </div>
    </div>`;
        clutterForOverlay += `<div data-value="${index}" class="song music-overlay-song">
        <div data-value="${index}" class="song-img">
            <img data-value="${index}" src=${obj.album} alt="Song Poster - ${index}">
        </div>
        <div data-value="${index}" class="song-details">
            <div data-value="${index}" class="name">${obj.name}</div>
            <div data-value="${index}" class="details">${obj.artist}</div>
        </div>
    </div>`;
    });

    document.querySelector("#musicoverlaylist").innerHTML = clutterForOverlay;
    document.querySelector("#musicmainlist").innerHTML = clutterForMain;
};
function selectSongFromMain() {
    songMainList.addEventListener("click", function (obj) {
        let selectedSongHTML = "";
        selectedSong = obj.target.dataset.value;
        selectedSongHTML += `<div class="current-song">
        <div class="current-song-img">
            <img src=${songs[selectedSong].album} alt="Selected Song">
        </div>
        <div class="current-song-details">
            <div class="current-song-name">${songs[selectedSong].name}</div>
            <div class="current-song-singers">${songs[selectedSong].artist}</div>
            <div class="current-song-description">${songs[selectedSong].description}</div>
        </div>
    </div>`;
        currentSongField.innerHTML = selectedSongHTML;
        audio.src = songs[selectedSong].url;
        audio.play();
        playingSong = true;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

        checknextBtn();
        checkbackBtn();
    });
};
function selectSongFromOverlay() {
    songOverlayList.addEventListener('click', function (obj) {
        let selectedSongHTML = "";
        selectedSong = obj.target.dataset.value;
        selectedSongHTML += `<div class="current-song">
        <div class="current-song-img">
            <img src=${songs[selectedSong].album} alt="">
        </div>
        <div class="current-song-details">
            <div class="current-song-name">${songs[selectedSong].name}</div>
            <div class="current-song-singers">${songs[selectedSong].artist}</div>
            <div class="current-song-description">${songs[selectedSong].description}</div>
        </div>
    </div>`;
        document.querySelector(".mid").innerHTML = selectedSongHTML;
        audio.src = songs[selectedSong].url;
        audio.play();
        playingSong = true;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

        checknextBtn();
        checkbackBtn();
        crossBtnMusic.click();
    });
};
function togglePlayBtn() {
    playBtn.addEventListener('click', function () {
        if (playingSong == true) {
            playingSong = false;
            audio.pause();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
        else {
            playingSong = true;
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            audio.src = songs[selectedSong].url;
            audio.play();
        }
    });
};
function toggleNextBtn() {
    nextBtn.addEventListener('click', function () {
        if (selectedSong < songs.length - 1) {
            selectedSong++;
            playSong(selectedSong);

            checknextBtn();
            checkbackBtn();
        }
    });
};
function toggleBackBtn() {
    backBtn.addEventListener('click', function () {
        if (selectedSong >= 1) {
            selectedSong--;
            playSong(selectedSong);

            checkbackBtn();
            checknextBtn();
        }
    });
};
function playSong(val) {
    audio.src = songs[val].url;
    audio.play();
    playingSong = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

    let selectedSongHTML = "";
    selectedSongHTML += `<div class="current-song">
        <div class="current-song-img">
            <img src=${songs[val].album} alt="Selected Song">
        </div>
        <div class="current-song-details">
            <div class="current-song-name">${songs[val].name}</div>
            <div class="current-song-singers">${songs[val].artist}</div>
            <div class="current-song-description">${songs[val].description}</div>
        </div>
    </div>`;
    currentSongField.innerHTML = selectedSongHTML;
};
function pauseSong() {
    audio.pause();
    playingSong = false;
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
};
function checknextBtn() {
    if (selectedSong >= songs.length - 1) {
        nextBtn.style.opacity = '0.3';
    }
    else {
        nextBtn.style.opacity = '1';
    }
};
function checkbackBtn() {
    if (selectedSong <= 0) {
        document.getElementById('backMusic').style.opacity = '0.3';
    }
    else {
        document.getElementById('backMusic').style.opacity = '1';
    }
};
function crossMusic() {
    crossBtnMusic.addEventListener("click", function () {
        musicOverlay.style.display = "none";
    });
};
function crossMenu() {
    crossBtnMenu.addEventListener("click", function () {
        menuOverlay.style.display = "none";
    });
};
function toggleMenu() {
    menuBtn.addEventListener("click", function () {
        menuOverlay.style.display = "block";
    });
};
function toggleMusic() {
    musicBtn.addEventListener("click", function () {
        musicOverlay.style.display = "block";
    });
};
function clickSearch() {
    searchBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            searchOverlay.style.display = 'block';
            searchField.value = '';
            searchField.focus();
        });
    });
};
function searchMusic() {
    inputField.addEventListener('input', function () {
        let inputValue = inputField.value.trim(); // it will remove the leading and trailing whitespace
        if (inputValue === '') {
            searchResults.style.display = 'none';
            return;
        }
        searchResults.style.display = 'block';
        document.body.style.overflow = 'hidden';

        //created a new array with input field
        let newSongs = songs.filter(obj => obj.name.toLowerCase().startsWith(inputValue.toLowerCase()));
        let temp = ``;
        newSongs.forEach((obj, index) => {
            temp += `<div data-value="${index}" class="search-song">
            <div data-value="${index}" class="search-song-img">
                <img data-value="${index}" src="${obj.album}" alt="Song Poster - ${index}">
            </div>
            <div data-value="${index}" class="search-song-details">
                <div data-value="${index}" class="search-song-name">${obj.name}</div>
                <div data-value="${index}" class="search-song-artist">${obj.artist}</div>
            </div>
        </div>`;
        });
        if (newSongs.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        searchResults.innerHTML = temp;
        searchResults.style.display = 'block';
    });
};
function crossSearch() {
    crossBtnSearch.addEventListener('click', function () {
        searchOverlay.style.display = 'none';
    });
};
function selectSongFromSearch() {
    searchSongList.addEventListener('click', function (obj) {
        let text = obj.target.textContent;
        selectedSong = searchRealSong(songs, text);
        let selectedSongHTML = "";
        selectedSongHTML += `<div class="current-song">
        <div class="current-song-img">
            <img src=${songs[selectedSong].album} alt="">
        </div>
        <div class="current-song-details">
            <div class="current-song-name">${songs[selectedSong].name}</div>
            <div class="current-song-singers">${songs[selectedSong].artist}</div>
            <div class="current-song-description">${songs[selectedSong].description}</div>
        </div>
    </div>`;
        document.querySelector(".mid").innerHTML = selectedSongHTML;
        audio.src = songs[selectedSong].url;
        audio.play();
        playingSong = true;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

        checknextBtn();
        checkbackBtn();

        crossBtnSearch.click();
        crossBtnMenu.click();
    });
};
function searchRealSong(arr, text) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == text) {
            return i;
        }
    }
};
function nameAndHomeBtnFunction() {
    BeatBlastBtn.forEach(function (btn) {
        btn.addEventListener("click", function () { location.reload() });
    });
    homeBtn.forEach(function (btn) {
        btn.addEventListener("click", function () { window.open("https://github.com/satendra03/", "_blank"); });
    });
};
function checkClick() {
    comingSoonBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            comingSoonOverlay.style.display = "block";
            setTimeout(function () { comingSoonOverlay.style.display = "none"; }, 2500);
        });
    });
};
function playNextSong() {
    audio.addEventListener('ended', function () {
        if (selectedSong == 19) {
            selectedSong = -1;
        }
        selectedSong++;
        audio.src = songs[selectedSong];
        audio.play();
    });
};