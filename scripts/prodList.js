import toggleSlideMenu from './toggleSlideMenu.js'
import triggerCategoryBtn from './triggerCategoryBtn.js'
import toggleFilterModal from './toggleFilterModal.js'

const executeScripts = () => {
  toggleSlideMenu()
  triggerCategoryBtn()
  toggleFilterModal()
}

window.onload = executeScripts