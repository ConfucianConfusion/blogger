// 主题切换功能
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 检查本地存储中的主题设置
let currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
} else if (prefersDarkScheme.matches) {
    document.body.setAttribute('data-theme', 'dark');
}

// 返回顶部按钮
window.addEventListener('scroll', () => {
    const goTopButton = document.querySelector('.go-top');
    if (window.scrollY > 300) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});

// 点击返回顶部
document.querySelector('.go-top')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});