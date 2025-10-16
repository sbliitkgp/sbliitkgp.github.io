
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdown');
    const nav = document.querySelector('nav');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            nav.style.display = 'none';
            hamburger.style.display = 'flex';
        } else {
            nav.style.display = 'flex';
            hamburger.style.display = 'none';
            dropdown.style.display = 'none';
        }
    };

    if (hamburger && dropdown) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.style.display = 'flex';
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    }

    window.addEventListener('resize', toggleMenu);
    toggleMenu();
});

