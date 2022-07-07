const projectImages = document.querySelectorAll('.image-wrapper > img');

console.log(projectImages)

projectImages.forEach(image => {
  image.addEventListener('mouseenter', ({ target }) => {
    target.src = target.src.replace('.png', '.gif')
  })

  image.addEventListener('mouseleave', ({ target }) => {
    target.src = target.src.replace('.gif', '.png')
  })
})