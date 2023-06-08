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
    const $accordion =document.querySelectorAll('.accordionItem')
    for(let i=0;i< $accordion.length;i++){
         $accordion[i].addEventListener('click',function(){
             this.classList.toggle('open')
         })
    }
}

initAccordion()
