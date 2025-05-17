let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // Exit if no slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const textToCopy = element.firstChild.textContent.trim(); // Get the text content, excluding the button

    navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        // Optional: Show a temporary message like "Copied!"
        const button = element.querySelector('button');
        const originalButtonText = button.textContent;
        button.textContent = '已复制!';
        setTimeout(() => {
            button.textContent = originalButtonText;
        }, 2000);
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
        alert('无法复制文本');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});