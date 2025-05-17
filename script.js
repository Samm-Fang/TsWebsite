let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // 如果没有幻灯片则退出
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // 5秒切换一次图片
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const textToCopy = element.firstChild.textContent.trim(); // 获取文本内容，不包括按钮

    navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('复制成功!');
        // 可选：显示"已复制"临时消息
        const button = element.querySelector('button');
        const originalButtonText = button.textContent;
        button.textContent = '已复制!';
        setTimeout(() => {
            button.textContent = originalButtonText;
        }, 2000);
    }, function(err) {
        console.error('复制文本失败: ', err);
        alert('无法复制文本');
    });
}

// 平滑滚动导航链接
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
