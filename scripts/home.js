import toggleSlideMenu from './toggleSlideMenu.js'
import switchHeroImage from './switchHeroImage.js'

const executeScripts = () => {
  toggleSlideMenu()
  switchHeroImage()
}

window.onload = executeScripts
