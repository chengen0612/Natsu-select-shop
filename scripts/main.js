import slideMenu from './slideMenu.js'
import heroImage from './heroImage.js'

const executeScripts = () => {
  slideMenu()
  heroImage()
}

window.onload = executeScripts
