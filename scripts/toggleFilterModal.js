export default function () {
  // get dom elements
  const categoryBtn = document.getElementById('categoryBtn')
  const categoryModal = document.getElementById('filterModal')
  const body = document.getElementsByTagName('body')[0]
  const closeFilterBtn = document.getElementById('closeFilterBtn')

  const toggleModal = () => {
    categoryModal.classList.toggle('visible')
  }

  const toggleBody = () => {
    body.classList.toggle('isfixed')
  }

  const executor = () => {
    toggleModal()
    toggleBody()
  }

  categoryBtn.addEventListener('click', executor)
  closeFilterBtn.addEventListener('click', executor)
}