
function updateVisitCounter() {
  
    let visitCount = localStorage.getItem('pageVisitCount');
    

    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    
    localStorage.setItem('pageVisitCount', visitCount);

    document.getElementById('visit-count').textContent = visitCount;
}


function setupBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    updateVisitCounter();
    setupBackToTopButton();
});