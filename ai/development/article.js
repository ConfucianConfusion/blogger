// 主题切换功能
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 检查本地存储中的主题设置
let currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
} else if (prefersDarkScheme.matches) {
    document.body.setAttribute('data-theme', 'dark');
}

// 主题切换按钮事件
document.getElementById('themeToggle')?.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
