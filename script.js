// 主题切换功能
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 检查本地存储中的主题设置
let currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
} else if (prefersDarkScheme.matches) {
    document.body.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
}

// 切换主题
themeToggle.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    }
});

// 更新主题图标
function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '🌞' : '🌓';
}

// 返回顶部按钮
const goTopButton = document.querySelector('.go-top');

// 点击返回顶部
goTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 监听滚动事件，控制返回顶部按钮的显示
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});