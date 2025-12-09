// Tunggu sampai DOM siap
document.addEventListener('DOMContentLoaded', function() {

    // Tombol Explore
    const btnExplore = document.querySelector('.btn-explore');
    const businessSection = document.querySelector('#business');

    if(btnExplore && businessSection) {
        btnExplore.addEventListener('click', function() {
            businessSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Optional: Navbar highlight saat scroll (aktifkan kalau mau)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if(pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
