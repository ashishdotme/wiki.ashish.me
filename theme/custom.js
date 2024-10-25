window.addEventListener('DOMContentLoaded', () => {
  const chapterToggles = Array.from(document.querySelectorAll('.chapter li > a.toggle div'))

  chapterToggles.forEach((el) => {
    el.innerHTML = '&gt;'
    el.style.visibility = 'visible'
  })
})
