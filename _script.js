// 页面导航栏切换
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function () {
    // 切换高亮
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    // 滚动到对应模块
    const target = this.getAttribute('data-target');
    const section = document.getElementById(target);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// 作品集轮播动画
let carouselIndex = 0;
const carouselImgs = document.querySelectorAll('.carousel-img');
function showCarouselImg(idx) {
  carouselImgs.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
  });
}
function nextCarouselImg() {
  carouselIndex = (carouselIndex + 1) % carouselImgs.length;
  showCarouselImg(carouselIndex);
}
setInterval(nextCarouselImg, 5000); // 5秒切换
showCarouselImg(carouselIndex);

// 复制功能
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    showCopyTip('已复制到剪贴板');
  } else {
    // 兼容旧浏览器
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showCopyTip('已复制到剪贴板');
    } catch {
      showCopyTip('复制失败，请手动复制');
    }
    document.body.removeChild(textarea);
  }
}
function showCopyTip(msg) {
  let tip = document.getElementById('copy-tip');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'copy-tip';
    tip.style.position = 'fixed';
    tip.style.top = '24px';
    tip.style.left = '50%';
    tip.style.transform = 'translateX(-50%)';
    tip.style.background = 'rgba(79,142,247,0.95)';
    tip.style.color = '#fff';
    tip.style.padding = '10px 28px';
    tip.style.borderRadius = '12px';
    tip.style.fontSize = '1.1rem';
    tip.style.zIndex = 9999;
    tip.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.12)';
    document.body.appendChild(tip);
  }
  tip.textContent = msg;
  tip.style.opacity = '1';
  setTimeout(() => {
    tip.style.opacity = '0';
  }, 1600);
}
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const id = this.getAttribute('data-copy');
    const text = document.getElementById(id).textContent;
    copyToClipboard(text);
  });
});

// 页面滚动时导航栏高亮
window.addEventListener('scroll', () => {
  const sections = ['home', 'portfolio', 'contact'];
  let current = 'home';
  const scrollY = window.scrollY + 80;
  for (const id of sections) {
    const sec = document.getElementById(id);
    if (sec && scrollY >= sec.offsetTop) {
      current = id;
    }
  }
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-target') === current);
  });
});
