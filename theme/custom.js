window.addEventListener('DOMContentLoaded', () => {
  const chapterToggles = Array.from(document.querySelectorAll('.chapter .chapter-fold-toggle div'))

  chapterToggles.forEach((el) => {
    el.innerHTML = '&#8250;'
    el.style.visibility = 'visible'
  })
})
