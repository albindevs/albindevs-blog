
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function followCursor(element) {
    element.addEventListener('mousemove', function (e) {
        let rect = element.getBoundingClientRect()
        let x = Math.round((e.clientX - rect.left)/element.clientWidth * 100)
        let y = Math.round((e.clientY - rect.top)/element.clientHeight * 100)
        
        // console.log('x: ' + x + '% y: ' + y + '%')

        element.style.transform = `translate(-${x}px,-${y}px)`
        element.style.transition = `0.5s ease-out`
        element.style.transformOrigin = `50% 50%`
    })
}

function scaleOnY(element) {
    element.addEventListener('mousemove', function (e) {
        let rect = element.getBoundingClientRect()
        let y = Math.round((e.clientY - rect.top)/element.clientHeight * 100)

        element.style.transform = `scale(${1+0.005*y})`
        element.style.transition = `0.5s ease-out`
        element.style.transformOrigin = `50% 50%`
    })
    element.addEventListener('mouseleave', function (e) {
        element.style.transform = `scale(1)`
    })
}

function zoomOnHover(element) {
    element.addEventListener('mouseenter', function (e) {
        element.style.transform = `scale(2)`
        element.style.transition = `0.5s ease-out`
        element.style.transformOrigin = `50% 50%`
    })
    element.addEventListener('mouseleave', function (e) {
        element.style.transform = `scale(1)`
    })
}

function setAnimations() {
    let laptopIllustration = document.querySelector('#laptop-illustration')
    let skillsImg = document.querySelector('.skills-preview__img')
    let landinImg = document.querySelector('.landing__image')
    let mainSkillsImg = document.querySelector('.skills-illustration')
    
    if (laptopIllustration) {
        followCursor(laptopIllustration)
    }

    if (skillsImg) {
        followCursor(skillsImg)
    }

    if (landinImg) {
        followCursor(landinImg)
    }
    if (mainSkillsImg) {
        followCursor(mainSkillsImg)
    }
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
    setAnimations()


    window.addEventListener('load', function (e) {
        // if (isInViewport(cards[0])) {
        //     cardsDistribution();
        // }
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

        // if (isInViewport(cards[0])) {
        //     cardsDistribution();
        // }

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