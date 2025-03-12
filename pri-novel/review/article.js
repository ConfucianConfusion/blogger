document.addEventListener('DOMContentLoaded', function() {
    // 获取导航按钮容器
    const navButtons = document.querySelector('.nav-buttons');

    // 获取当前文章的文件名
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();

    // 获取所有评论文章的列表
    const articles = ['movie.html', 'book.html', 'art.html'];

    // 找到当前文章在列表中的位置
    const currentIndex = articles.indexOf(currentFile);

    // 创建上一篇和下一篇的导航链接
    if (currentIndex > 0) {
        const prevLink = document.createElement('a');
        prevLink.href = articles[currentIndex - 1];
        prevLink.className = 'nav-button';
        prevLink.textContent = '上一篇';
        navButtons.appendChild(prevLink);
    }

    // 添加返回列表的链接
    const backLink = document.createElement('a');
    backLink.href = '../review.html';
    backLink.className = 'nav-button';
    backLink.textContent = '返回列表';
    navButtons.appendChild(backLink);

    if (currentIndex < articles.length - 1) {
        const nextLink = document.createElement('a');
        nextLink.href = articles[currentIndex + 1];
        nextLink.className = 'nav-button';
        nextLink.textContent = '下一篇';
        navButtons.appendChild(nextLink);
    }
});