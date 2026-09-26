/*
    OLE.EXE
    A cute, funny and romantic game ❤️
*/


/* ================================
   MUSIC
================================ */

function startMusic() {

    const music = document.getElementById("backgroundMusic");

    music.volume = 0.35;

    music.play().catch(function () {

        /*
            Some mobile browsers prevent automatic
            music playback. The game will still work.
        */

        console.log("Music playback was blocked by the browser.");
    });
}


/* ================================
   SCREEN SYSTEM
================================ */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


/* ================================
   START GAME
================================ */

function startGame() {

    startMusic();

    showScreen("level1");

}


/* ================================
   CORRECT ANSWERS
================================ */

function correctAnswer(level) {

    /*
        Small pause before moving to the
        next level makes the game feel
        more like a game.
    */

    const button = document.activeElement;

    button.style.transform = "scale(1.04)";

    setTimeout(function() {

        if (level === 1) {

            showScreen("level2");

        }

        else if (level === 2) {

            showScreen("level3");

        }

        else if (level === 3) {

            showScreen("level4");

        }

        else if (level === 4) {

            showScreen("finalScreen");

        }

    }, 250);

}


/* ================================
   WRONG ANSWERS
================================ */

function wrongAnswer(message) {

    alert(message);

}


/* ================================
   NO BUTTON
================================ */

let noClicks = 0;

function sayNo() {

    noClicks++;

    const noButton = document.getElementById("noButton");

    const message = document.getElementById("noMessage");


    if (noClicks === 1) {

        message.innerHTML =
            "Are you sure? 😭";

    }

    else if (noClicks === 2) {

        message.innerHTML =
            "Ole... please reconsider 😂💗";

    }

    else if (noClicks === 3) {

        message.innerHTML =
            "Okay okay... I'm getting the message 😭😂";

    }

    else {

        message.innerHTML =
            "The NO button has officially resigned. 😭";

        noButton.style.display = "none";

    }


    /*
        The button moves slightly so the final
        screen stays playful.
    */

    if (noClicks < 4) {

        const x = Math.floor(Math.random() * 80) - 40;

        const y = Math.floor(Math.random() * 60) - 30;

        noButton.style.transform =
            "translate(" + x + "px, " + y + "px)";

    }

}


/* ================================
   YES
================================ */

function sayYes() {

    showScreen("successScreen");

    createHearts();

}


/* ================================
   HEART CONFETTI
================================ */

function createHearts() {

    const hearts = [

        "💗",
        "💕",
        "💖",
        "💘",
        "❤️",
        "✨",
        "🎀"

    ];


    for (let i = 0; i < 60; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];


        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-40px";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";


        const duration =
            2 + Math.random() * 3;


        heart.style.transition =
            "transform " + duration +
            "s linear, opacity " +
            duration + "s linear";


        document.body.appendChild(heart);


        setTimeout(function() {

            heart.style.transform =
                "translateY(" +
                (window.innerHeight + 100) +
                "px) rotate(" +
                (Math.random() * 720 - 360) +
                "deg)";

            heart.style.opacity = "0";

        }, 50);


        setTimeout(function() {

            heart.remove();

        }, (duration + 1) * 1000);

    }

}
