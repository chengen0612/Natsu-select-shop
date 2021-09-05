const getDomElements = () => {
  const hamburgerMenu = document.getElementById('hamburgerMenu')
  const slideMenu = document.getElementById('slideMenu')
  const body = document.getElementsByTagName('body')[0]
  const backdrop = document.getElementById('backdrop')
  return { hamburgerMenu, slideMenu, body, backdrop }
}

// return closure
const initializeChangeLayout = (elements) => {
  const { slideMenu, body, backdrop } = elements
  // set state
  let isActive = false
  // declare variables
  const scrollbarWidth = window.innerWidth - body.offsetWidth
  const attributeSet = {
    active: {
      slideMenu: {
        right: '-240px'
      },
      body: {
        overflow: 'visible',
        width: window.innerWidth
      },
      backdrop: {
        visibility: 'hidden',
        opacity: 0
      }
    },
    inactive: {
      slideMenu: {
        right: '-0px'
      },
      body: {
        overflow: 'hidden',
        width: `calc(100vw - ${scrollbarWidth}px)`
      },
      backdrop: {
        visibility: 'visible',
        opacity: 1
      }
    }
  }
  // inner function to change layout
  return function () {
    const layout = isActive ? attributeSet['active'] : attributeSet['inactive']

    slideMenu.style.right = layout['slideMenu']['right']
    body.style.overflow = layout['body']['overflow']
    body.style.width = layout['body']['width'] // prevent resizing
    backdrop.style.visibility = layout['backdrop']['visibility']
    backdrop.style.opacity = layout['backdrop']['opacity']

    isActive = !isActive
  }
}

const signEvent = (elements, func) => {
  const { hamburgerMenu } = elements
  hamburgerMenu.addEventListener('click', func)
}

const executor = () => {
  const elements = getDomElements()
  const changeLayout = initializeChangeLayout(elements)
  signEvent(elements, changeLayout)
}

export default executor
