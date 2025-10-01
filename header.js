let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.navoption')

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop
       let height = sec.offsetHeight 
       let id = sec.getAttribute('id');
       console.log(top, offset, height, id)

       if(top >= offset && top < offset + height ) {
        navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelector('.navoption[href*=' + id +']').classList.add('active');
        })
       }
    });
}