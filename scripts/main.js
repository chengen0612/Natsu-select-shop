import slideMenu from './slideMenu.js'
import heroImage from './heroImage.js'
import triggerCategoryBtn from './triggerCategoryBtn.js'

const executeScripts = () => {
  slideMenu()
  heroImage()
  triggerCategoryBtn()
}

window.onload = executeScripts
