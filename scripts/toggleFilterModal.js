import bodystyle from "./modules/bodystyle.js"

export default function () {
  const categoryBtn = document.getElementById('categoryBtn')
  const categoryModal = document.getElementById('filterModal')
  const closeFilterBtn = document.getElementById('closeFilterBtn')

  const toggleModal = () => {
    categoryModal.classList.toggle('visible')
  }

  const executor = () => {
    toggleModal()
    bodystyle.execute(changeBodyStyle, true)
  }

  const changeBodyStyle = bodystyle.initHandler()

  categoryBtn.addEventListener('click', executor)
  closeFilterBtn.addEventListener('click', executor)
}