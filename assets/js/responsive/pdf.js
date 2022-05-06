const resumeArticle = document.getElementById('resume')
const MIN_PDF_SIZE = 900

const observer = new ResizeObserver(entries => {
  const article = entries[0]
  const pdf = resumeArticle.querySelector('.embed-cv-pdf')
  const iconPdf = resumeArticle.querySelector('.icon-cv-pdf')
  if (article.contentRect.width > MIN_PDF_SIZE) {
    // show pdf 
    pdf.hidden = false
    iconPdf.hidden = true
    return
  }

  // show icon 
  iconPdf.hidden = false
  pdf.hidden = true
  return
})

observer.observe(resumeArticle)