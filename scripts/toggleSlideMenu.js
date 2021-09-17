import bodystyle from './modules/bodystyle.js'

export default function () {
  const hamburgerMenu = document.getElementById('hamburgerMenu')
  const slideMenu = document.getElementById('slideMenu')
  const backdrop = document.getElementById('backdrop')

  const toggleSlideMenu = () => {
    slideMenu.classList.toggle('visible')
  }

  const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
  }

  const executor = () => {
    toggleSlideMenu()
    const bool = bodystyle.identify()
    bodystyle.execute(changeBodyStyle, bool)
    toggleBackdrop()
  }

  const changeBodyStyle = bodystyle.initHandler()

  hamburgerMenu.addEventListener('click', executor)
}