const body = document.getElementsByTagName('body')[0]
const categoryModal = document.getElementById('filterModal')

const toggleBodyClass = () => {
  body.classList.toggle('isfixed')
}

// unnecessary on touch screen devices
const changeBodyWidth = (bool, scrollbarWidth) => {
  body.style.width = bool ? 'unset'
    : `calc(100vw - ${scrollbarWidth}px)`
}

const initStyleHandler = () => {
  let isBodyFixed = false
  const scrollbarWidth = window.innerWidth - body.offsetWidth
  const styleHandler = () => {
    toggleBodyClass()
    // changeBodyWidth(isBodyFixed, scrollbarWidth)
    
    isBodyFixed = !isBodyFixed
  }
  return styleHandler
}

const identifyCurrentState = () => {
  let isScrollable = true
  if (categoryModal) {
    const reference = categoryModal.classList.contains('visible')
    isScrollable = !reference
  }
  return isScrollable
}

// argument 1 is closure from initHandler
// argument 2 is boolean from identifyCurrentState
const executeHandler = (handleStyle, bool) => {
  if (bool) handleStyle()
}

const bodystyle = {}

bodystyle.initHandler = initStyleHandler
bodystyle.identify = identifyCurrentState
bodystyle.execute = executeHandler

export default bodystyle