import toggleSlideMenu from './toggleSlideMenu.js'
import triggerCategoryBtn from './triggerCategoryBtn.js'

const executeScripts = () => {
  toggleSlideMenu()
  triggerCategoryBtn()
}

window.onload = executeScripts