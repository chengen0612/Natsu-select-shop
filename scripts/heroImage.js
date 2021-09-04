const getDomElement = () => {
  const heroImage = document.getElementById('heroImage')
  return heroImage
}

const changeImage = (element) => {
  // initialize
  let index = 0
  const imageList = [
    'images/main-img01.jpg',
    'images/main-img02.jpg',
    'images/main-img03.jpg'
  ]
  const duration = 1500
  element.style.transition = `${duration / 1000}s`
  setInterval(() => {
    index < 2 ? index += 1 : index = 0
    element.style.opacity = 0
    setTimeout(() => {
      element.src = imageList[index]
      element.style.opacity = 1
    }, duration)
  }, 5000)
}

const executeHeroImage = () => {
  const element = getDomElement()
  changeImage(element)
}

window.onload = executeHeroImage