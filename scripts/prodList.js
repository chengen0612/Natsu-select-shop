import toggleSlideMenu from './toggleSlideMenu.js'
import triggerOpenFilterBtn from './triggerOpenFilterBtn.js'
import toggleFilterModal from './toggleFilterModal.js'

const executeScripts = () => {
  toggleSlideMenu()
  triggerOpenFilterBtn()
  toggleFilterModal()
}

window.onload = executeScripts