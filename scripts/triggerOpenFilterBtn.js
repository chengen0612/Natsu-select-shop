export default function () {
  const openFilterBtn = document.getElementById('openFilterBtn')
  const prodListHeadline = document.getElementById('prodListHeadline')

  // keep it for modularization
  // const getOffsetTop = element => {
  //   const offsetTop = element.offsetTop
  //   return offsetTop
  // }

  const showBtn = () => {
    openFilterBtn.classList.add('visible')
  }

  const hideBtn = () => {
    openFilterBtn.classList.remove('visible')
  }

  const handleBtn = (yCoord) => {
    window.pageYOffset >= yCoord ? showBtn() : hideBtn()
  }

  // const offsetTop = getOffsetTop(prodListHeadline)
  const offsetTop = prodListHeadline.offsetTop
  const navHeight = 108
  // get y coordinate to trigger button
  const yCoord = offsetTop - navHeight

  window.addEventListener('scroll', () => handleBtn(yCoord))
}
