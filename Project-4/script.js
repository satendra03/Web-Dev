var clickCount = 0;

function playSound() {
    var audio = document.getElementById("babu_maan_jao");
    audio.play();
}

function playAudioAnother() {
    var audio1 = document.getElementById("agar_tu_aisa");
    audio1.play();
}

function loveFunction() {
    var yBtn = document.getElementById("y-btn");
    var nBtn = document.getElementById("n-btn");

    var yFontSize = window.getComputedStyle(yBtn, null).getPropertyValue('font-size');
    var yFontSizeNum = parseFloat(yFontSize);
    yBtn.style.fontSize = (yFontSizeNum + 4) + 'px';
    yBtn.style.width = (yBtn.offsetWidth + 20) + 'px';
    yBtn.style.height = (yBtn.offsetHeight + 7) + 'px';

    var nFontSize = window.getComputedStyle(nBtn, null).getPropertyValue('font-size');
    var nFontSizeNum = parseFloat(nFontSize);
    nBtn.style.fontSize = (nFontSizeNum - 2) + 'px';
    nBtn.style.width = (nBtn.offsetWidth - 12) + 'px';
    nBtn.style.height = (nBtn.offsetHeight - 7) + 'px';

    clickCount++;

    if (clickCount >= 7) {
        document.getElementById("hidden-text").innerText = "Please say YES 😭😭";
    }
    if (clickCount >= 10) {
        document.getElementById("tittle").innerText = "Let me try again";
        const pickupLines = [
            "Are you French? Because Eiffel for you.",
            "Are you a bank loan? Because you have my interest!",
            "Are you a camera? Because every time I look at you, I smile.",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Are you a magician? Because whenever I look at you, everyone else disappears!",
            "Are you a time traveler? Because I see you in my future.",
            "Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
            "Are you made of copper and tellurium? Because you're Cu-Te.",
            "Do you believe in fate? Because I think something magical's about to happen.",
            "Do you believe in love at first sight—or should I walk by again?",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
            "Do you have a campfire? Because you're hot and I want s'more.",
            "Do you have a map to your heart? Because I just keep getting lost in your eyes.",
            "Do you have a map? I just keep getting lost in your eyes.",
            "Do you have a name, or can I call you mine?",
            "Do you have a sunburn, or are you always this hot?",
            "Do you know what's on the menu? Me-n-u.",
            "Do you like Star Wars? Because Yoda one for me!",
            "Excuse me, but I think the stars are shining a little bit brighter tonight—all because of you.",
            "I must be a snowflake because I've fallen for you.",
            "I'm not a photographer, but I can definitely picture us together.",
            "If beauty were time, you'd be an eternity.",
            "If looks could kill, you'd be a weapon of mass destruction.",
            "If you were a cat, you'd purr-fect.",
            "If you were a vegetable, you'd be a cute-cumber.",
            "If you were words on a page, you'd be the fine print.",
            "Is your dad a boxer? Because you're a knockout!",
            "Is your name Ariel? Because I think we mermaid for each other.",
            "Is your name Google? Because you have everything I've been searching for.",
            "Is your name Wi-Fi? Because I'm really feeling a connection."
        ];

        const randomIndex = Math.floor(Math.random() * pickupLines.length);
        const randomPickupLine = pickupLines[randomIndex];
        document.getElementById("text").innerText = randomPickupLine;
        
    }
    if (clickCount >= 15) {
        nBtn.style.display = "none";
        document.getElementById("hidden-text").innerText = "😊";
        document.getElementById("hidden-text").style.fontSize = "50px";
        if (nBtn.style.display == "none") {
            document.getElementById("text").style.display = "none";
            document.getElementById("tittle").style.display = "none";
            playAudioAnother();
        }
    }

}