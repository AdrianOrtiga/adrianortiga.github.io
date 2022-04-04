const resumeArticle = document.getElementById('resume')
const MIN_PDF_SIZE = 900

const observer = new ResizeObserver(entries => {
    const article = entries[0]
    const pdf = resumeArticle.querySelectorAll('.embed-pdf')
    const iconPdf = resumeArticle.querySelectorAll('.icon-pdf')
    
    if(article.contentRect.width > MIN_PDF_SIZE){
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