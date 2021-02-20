
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

(function () {
    
    
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.menu-btn');
    
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const NavItems = document.querySelectorAll('.menu-nav__item');
    
    const landingSkills = document.querySelector('.skills-preview');
    const landingPortfolio = document.querySelector('.portfolio-preview');
    
    let cards = document.querySelectorAll('.card');


    window.addEventListener('load', function (e) {
        if (isInViewport(cards[0])) {
            cardsDistribution();
        }
    })

    function cardsDistribution() {
        // cardsDisplayed = true;
        // let counter = 0;
        // cards.forEach(card => {
        //     card.style.animationDelay = `${counter}s`;
        //     card.classList.add('shown');
        //     counter = counter + 0.5;
        // });
    }


    window.addEventListener('scroll', function (e) {
        handleHeaderState();

        if (isInViewport(cards[0])) {
            cardsDistribution();
        }

        if (landingSkills && isInViewport(landingSkills)) {
            landingSkills.classList.add('shown');
        }

        if (landingPortfolio && isInViewport(landingPortfolio)) {
            landingPortfolio.classList.add('shown');
        }
    });

    function handleHeaderState() {
        let onTop = window.scrollY;

        if (!onTop) {
            header.classList.remove('scroll');
            menuBtn.classList.remove('scroll');
        } else {
            header.classList.add('scroll');
            menuBtn.classList.add('scroll');
        }
    }


    menuBtn.addEventListener('click', function (e) {
        handleMenuClick()
    });

    function handleMenuClick() {
        menuBtn.classList.toggle('isClosed');
        header.classList.toggle('isShown');
        menu.classList.toggle('isShown');
        menuNav.classList.toggle('isShown');
        NavItems.forEach(item => item.classList.toggle('isShown'));
    }
})();