function initMenuMobile() {
    const $menu = document.querySelector('nav ul')
    const $toggle = document.querySelector('.toggle')
    const $icon = document.querySelector('.fa-bars')
    
    $toggle.addEventListener('click', () => {
        if ($icon.classList.contains('fa-bars')) {
            $icon.classList.replace('fa-bars', 'fa-times')
            } else {
            $icon.classList.replace('fa-times', 'fa-bars')
        }
        $menu.classList.toggle('active')
    })

    document.onreadystatechange = function () {
        let lastScrollPosition = 0
        const navbar = document.querySelector('header')
        window.addEventListener('scroll', function (e) {
            lastScrollPosition = window.scrollY

            if (lastScrollPosition > 100) {
                navbar.classList.add('header-visiblity')
            } else {
                navbar.classList.remove('header-visiblity')
            }
        })
    }
}

initMenuMobile()

function initAccordion() {
    const $title1 = document.getElementById('title-1')
    $title1.addEventListener('click', ()=> {
        document.getElementById('content-1').classList.add('open')
        document.getElementById('content-2').classList.remove('open')
        document.getElementById('content-3').classList.remove('open')
        document.getElementById('content-4').classList.remove('open')
        document.getElementById('content-5').classList.remove('open')
    })

    const $title2 = document.getElementById('title-2')
    $title2.addEventListener('click', () => {
        document.getElementById('content-2').classList.add('open')
        document.getElementById('content-1').classList.remove('open')
        document.getElementById('content-3').classList.remove('open')
        document.getElementById('content-4').classList.remove('open')
        document.getElementById('content-5').classList.remove('open')
    })
    const $title3 = document.getElementById('title-3')
    $title3.addEventListener('click', () => {
        document.getElementById('content-3').classList.add('open')
        document.getElementById('content-2').classList.remove('open')
        document.getElementById('content-1').classList.remove('open')
        document.getElementById('content-4').classList.remove('open')
        document.getElementById('content-5').classList.remove('open')
    })

    const $title4 = document.getElementById('title-4')
    $title4.addEventListener('click', () => {
        document.getElementById('content-4').classList.add('open')
        document.getElementById('content-2').classList.remove('open')
        document.getElementById('content-1').classList.remove('open')
        document.getElementById('content-3').classList.remove('open')
        document.getElementById('content-5').classList.remove('open')
    })
    const $title5 = document.getElementById('title-5')
    $title5.addEventListener('click', () => {
        document.getElementById('content-5').classList.add('open')
        document.getElementById('content-2').classList.remove('open')
        document.getElementById('content-1').classList.remove('open')
        document.getElementById('content-3').classList.remove('open')
        document.getElementById('content-4').classList.remove('open')
    })
}

initAccordion()