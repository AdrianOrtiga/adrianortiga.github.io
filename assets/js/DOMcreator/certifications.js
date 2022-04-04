const pdfCertifications = [
    {
        src: './documents/160 Hour Certificate in Teaching English as a Foreign Language (TEFL) Adrian Ortiga.pdf',
        title: 'TELF CERTIFICATION',
    },
    {
        src: './documents/Carta recomendación - Adrián Ortiga 11-ago-2021.pdf',
        title: 'RECOMENDATION LETTER',
    },
    {
        src: './documents/Certificado Examinador Dele B1_B2.pdf',
        title: 'DELE EXAMINER B1/B2',
    },
]

createPdfCertificateIcons()

function createPdfCertificateIcons(){
    const certificationsContainer = document.getElementById('certification-container')
    const ul = document.createElement('ul')
    ul.classList.add('social')

    pdfCertifications.forEach(pdf => {
        const li = document.createElement('li')
        li.style.marginInline = '20px'
        const a = document.createElement('a')
        a.classList.add('fa')
        a.classList.add('fa-file')
        a.setAttribute('href',pdf.src)
        a.setAttribute('target','_blank')
        a.style.left = '50%'
        a.style.transform = 'translateX(-50%)'

        const title = document.createElement('span')
        title.textContent = pdf.title

        li.appendChild(a)
        li.appendChild(title)
        ul.appendChild(li)
    })

    certificationsContainer.appendChild(ul)
}