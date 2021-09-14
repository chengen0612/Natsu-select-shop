export default function () {
  const categoryBtn = document.getElementById('categoryBtn')
  const itemListHeadline = document.getElementById('itemListHeadline')

  // const getOffsetTop = element => {
  //   const offsetTop = element.offsetTop
  //   return offsetTop
  // }

  const showBtn = () => {
    categoryBtn.classList.add('visible')
  }

  const hideBtn = () => {
    categoryBtn.classList.remove('visible')
  }

  const handleBtn = (yCoord) => {
    window.pageYOffset >= yCoord ? showBtn() : hideBtn()
  }

  // const offsetTop = getOffsetTop(itemListHeadline)
  const offsetTop = itemListHeadline.offsetTop
  const navHeight = 108
  // get y coordinate to trigger button
  const yCoord = offsetTop - navHeight

  window.addEventListener('scroll', () => handleBtn(yCoord))
}
