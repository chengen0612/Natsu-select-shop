export default function () {
  // get dom elements
  const hamburgerMenu = document.getElementById('hamburgerMenu')
  const slideMenu = document.getElementById('slideMenu')
  const body = document.getElementsByTagName('body')[0]
  const backdrop = document.getElementById('backdrop')

  const toggleSlideMenu = () => {
    slideMenu.classList.toggle('visible')
  }

  const initToggleBody = () => {
    let isFixed = false
    const scrollbarWidth = window.innerWidth - body.offsetWidth

    const toggleBody = () => {
      body.classList.toggle('isfixed')
      isFixed ? body.style.width = 'unset'
        : body.style.width = `calc(100vw - ${scrollbarWidth}px)`

      isFixed = !isFixed
    }

    return toggleBody
  }

  const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
  }

  const executor = () => {
    toggleSlideMenu()
    toggleBody()
    toggleBackdrop()
  }

  const toggleBody = initToggleBody()

  hamburgerMenu.addEventListener('click', executor)
}