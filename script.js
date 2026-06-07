const homeBtn = document.getElementById('home-btn')
homeBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const hamburgerBtn = document.getElementById('hamburger-btn')
const closeBtn = document.getElementById('close-btn')
const mobileNav = document.getElementById('mobile-nav')
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item')

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.add('open')
})

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('open')
})

mobileMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('open')
  })
})

const header = document.getElementById('main-header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

const faders = document.querySelectorAll('.fade-in-section')
const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll,
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    appearOnScroll.unobserve(entry.target)
  })
}, appearOptions)

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

const sliders = document.querySelectorAll('.slider-container')
sliders.forEach((slider) => {
  let isDown = false
  let startX
  let scrollLeft

  slider.addEventListener('mousedown', (e) => {
    isDown = true
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
    slider.style.scrollBehavior = 'auto'
  })

  slider.addEventListener('mouseleave', () => {
    isDown = false
  })
  slider.addEventListener('mouseup', () => {
    isDown = false
    slider.style.scrollBehavior = 'smooth'
  })

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 2
    slider.scrollLeft = scrollLeft - walk
  })
})
