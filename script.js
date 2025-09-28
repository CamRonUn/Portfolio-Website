const texts = ["software Engineer", "Computer Science Student", "Full Stack Develepor", "Ironman", "I Use Vim Btw"];
let currentIndex = 0;
let currentIndexA = 0



function changetext() {
    const introText = document.getElementById("changingText");
    introText.innerHTML = texts[currentIndex];
    currentIndex = (currentIndex + 1 ) % texts.length
}

function triClubPhotos() {
    const photo = document.getElementById("triclub")
    const photos = ["/recources/Triclub/Screenshot 2025-09-28 at 5.39.07 pm.png", "/recources/Triclub/Screenshot 2025-09-28 at 5.39.15 pm.png", "/recources/Triclub/Screenshot 2025-09-28 at 5.39.22 pm.png", "/recources/Triclub/Screenshot 2025-09-28 at 5.39.31 pm.png"]
    photo.src = photos[currentIndexA]
    currentIndexA = (currentIndexA + 1) % photos.length
}

changetext();
triClubPhotos();


setInterval(triClubPhotos, 3000);
setInterval(changetext, 3000);