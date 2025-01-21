const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
        link.classList.add('active');
    } 
    else {
        link.classList.remove('active');
    }
});
