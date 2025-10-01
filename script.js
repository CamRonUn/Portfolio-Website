const texts = ["software Engineer", "Computer Science Student", "Full Stack Develepor", "Ironman", "I Use Vim Btw"];
let currentIndex = 0;
let currentIndexA = 0
let currentIndexB = 0



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

function projectChange() {
    const changingProjects = {
        "title": ["Triathlon Quote Generator"],
        "image": ["/recources/Screenshot 2025-09-29 at 6.07.56 pm.png"],
        "description" : ["Generates a new Triathlon quote and sources athletes image from the internet"],
        "gitlink": ["https://github.com/CamRonUn/Triathlon-Quote-Generator"]
    }
    const title = document.getElementById("changingPTitle")
    const image = document.getElementById("ProjectImageContainer")
    const description = document.getElementById("changingPDesccription")
    const gitlink = document.getElementById("changingPGit")
    title.innerHTML = changingProjects.title[currentIndexB]
    image.src = changingProjects.image[currentIndexB]
    description.innerHTML = changingProjects.description[currentIndexB]
    gitlink.href = changingProjects.gitlink[currentIndexB]
    currentIndexB = (currentIndexB + 1) % changingProjects.title.length
}

function triClubPhotos() {
    const photo = document.getElementById("triclub")
    const photos = ["/recources/Triclub/Screenshot 2025-09-28 at 5.39.07 pm.png", "/recources/Triclub/Screenshot 2025-09-28 at 5.39.15 pm.png", "/recources/Triclub/Screenshot 2025-09-28 at 5.39.22 pm.png", "/recources/Triclub/Screenshot 2025-09-28 at 5.39.31 pm.png"]
    photo.src = photos[currentIndexA]
    currentIndexA = (currentIndexA + 1) % photos.length
}

// const intro = document.getElementById('Intro')
// const Projects = document.getElementById('Projects')
// const Certs = document.getElementById('Certs')
// const Contact = document.getElementById('Contact')

changetext();
triClubPhotos();


setInterval(triClubPhotos, 3000);
setInterval(changetext, 3000);