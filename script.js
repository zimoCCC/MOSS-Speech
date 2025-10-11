// 工作经历数据配置
const workData = {
    job1: {
        startDate: '2024-12-16', // 请根据实际情况修改
        endDate: '2024-12-21',   // 请根据实际情况修改
        title: '第一份工作',
        company: '公司名称', // 请根据实际情况修改
        description: '这份工作不怎么顺利，上司也刁难人，只做了几天，咱不受这气',
        achievements: [
            '学会了如何在上司旁边偷偷带耳机听歌',
        ],
        image: 'images/job1.jpg'
    },
    gap: {
        startDate: '2024-12-21', // 请根据实际情况修改
        endDate: '2025-02-25',   // 请根据实际情况修改
        title: 'Gap期间',
        description: '工作累啦，回家过个年再说，这段时间我们迎来了“神仙般的日子”',
        activities: [
            "成都发了一次烧",
            "合川玩了一圈",
            "带你一起临时买票回玉林",
        ],
        image: 'images/gap1.jpg'
    },
    job2: {
        startDate: '2025-02-25', // 请根据实际情况修改
        endDate: '2025-07-17',   // 请根据实际情况修改
        title: '第二份工作',
        company: '嗨范儿', // 请根据实际情况修改
        description: '在这里呆了很久很久，跟小思姐斗智斗勇，当然也学到了不少东西',
        achievements: [
            '吃遍了重庆北站附近的外卖',
            '习惯了下班地铁上的电话',
            '每次去重庆，一出站就能见到你，真的很开心',
        ],
        image: 'images/job2_haifaner.jpg'
    },
    gap2: {
        startDate: '2025-07-17', // 请根据实际情况修改
        endDate: '2025-08-31',   // 请根据实际情况修改
        title: '第二次Gap',
        description: '从嗨范儿离职后的休息时间，调整状态准备新的开始。',
        activities: [
            '好好休息调整状态',
            '思考未来的职业方向',
            '享受难得的自由时光',
            '为下一份工作做准备'
        ],
        image: 'images/gap2.jpg'
    },
    jobSearch: {
        startDate: '2025-09-01', // 请根据实际情况修改
        endDate: '2025-10-11',   // 请根据实际情况修改
        title: '艰难的找工作历程',
        description: '一个多月的7休，焦虑和压力让人忍俊不禁。',
        stats: {
            applications: 25,    // 请根据实际情况修改
            interviews: 8,       // 请根据实际情况修改
            offers: 3           // 请根据实际情况修改
        },
        image: 'images/job_search.jpg'
    },
    newStart: {
        startDate: '2025-10-11', // 请根据实际情况修改
        title: '新起点',
        company: '畅所欲言MCN', // 请根据实际情况修改
        description: '经过努力，终于找到了心仪的工作！比在家强！比0多！比7休好！比没有更好！',
        highlights: [
            'MCN大厂',
            '全新的工作内容',
            '良好的发展前景',
            '优秀的团队氛围',
            '终于不用再找工作了'
        ],
        image: 'images/new_start_mcn.png'
    }
};

// 计算时间差的函数
function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) {
        return `${diffDays}天`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        const days = diffDays % 30;
        return days > 0 ? `${months}个月${days}天` : `${months}个月`;
    } else {
        const years = Math.floor(diffDays / 365);
        const months = Math.floor((diffDays % 365) / 30);
        return months > 0 ? `${years}年${months}个月` : `${years}年`;
    }
}

// 更新持续时间显示
function updateDurations() {
    // 第一份工作
    const job1Duration = calculateDuration(workData.job1.startDate, workData.job1.endDate);
    document.getElementById('job1-duration').textContent = job1Duration;
    
    // Gap期间
    const gapDuration = calculateDuration(workData.gap.startDate, workData.gap.endDate);
    document.getElementById('gap-duration').textContent = gapDuration;
    
    // 第二份工作
    const job2Duration = calculateDuration(workData.job2.startDate, workData.job2.endDate);
    document.getElementById('job2-duration').textContent = job2Duration;
    
    // 第二次Gap
    const gap2Duration = calculateDuration(workData.gap2.startDate, workData.gap2.endDate);
    document.getElementById('gap2-duration').textContent = gap2Duration;
    
    // 求职历程
    const searchDuration = calculateDuration(workData.jobSearch.startDate, workData.jobSearch.endDate);
    document.getElementById('search-duration').textContent = searchDuration;
}

// 更新求职统计
function updateJobSearchStats() {
    // 直接设置为问号，不使用数字
    const applicationsElement = document.getElementById('applications-count');
    const interviewsElement = document.getElementById('interviews-count');
    const offersElement = document.getElementById('offers-count');
    
    if (applicationsElement) {
        applicationsElement.textContent = '??';
    }
    if (interviewsElement) {
        interviewsElement.textContent = '??';
    }
    if (offersElement) {
        offersElement.textContent = '??';
    }
}

// 数字动画效果
function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    const duration = 2000; // 2秒
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 使用缓动函数
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(easeOutQuart * targetNumber);
        
        element.textContent = currentNumber;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// 导航功能
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.getAttribute('data-section');
            
            // 移除所有活动状态
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // 添加活动状态
            item.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // 如果是求职历程部分，更新统计数字
            if (targetSection === 'job-search') {
                setTimeout(updateJobSearchStats, 300);
            }
        });
    });
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.highlight-box, .stat-item, .image-placeholder');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 图片上传功能（可选）
function initImageUpload() {
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        placeholder.innerHTML = `<img src="${e.target.result}" alt="上传的图片" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">`;
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            input.click();
        });
    });
}

// 添加键盘导航支持
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const navItems = document.querySelectorAll('.nav-item');
        const activeIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));
        
        if (e.key === 'ArrowLeft' && activeIndex > 0) {
            navItems[activeIndex - 1].click();
        } else if (e.key === 'ArrowRight' && activeIndex < navItems.length - 1) {
            navItems[activeIndex + 1].click();
        }
    });
}

// 添加分享功能
function initShareFunction() {
    // 创建分享按钮
    const shareButton = document.createElement('button');
    shareButton.innerHTML = '<i class="fas fa-share-alt"></i> 分享';
    shareButton.className = 'share-button';
    shareButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-family: inherit;
        font-weight: 500;
        transition: all 0.3s ease;
    `;
    
    shareButton.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: '工作历程记录',
                    text: '从迷茫到新起点，记录每一个重要的时刻',
                    url: window.location.href
                });
            } catch (err) {
                console.log('分享取消');
            }
        } else {
            // 复制链接到剪贴板
            try {
                await navigator.clipboard.writeText(window.location.href);
                shareButton.innerHTML = '<i class="fas fa-check"></i> 已复制';
                setTimeout(() => {
                    shareButton.innerHTML = '<i class="fas fa-share-alt"></i> 分享';
                }, 2000);
            } catch (err) {
                console.log('复制失败');
            }
        }
    });
    
    document.body.appendChild(shareButton);
}

// 添加主题切换功能
function initThemeToggle() {
    const themeButton = document.createElement('button');
    themeButton.innerHTML = '<i class="fas fa-moon"></i>';
    themeButton.className = 'theme-toggle';
    themeButton.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: rgba(255, 255, 255, 0.9);
        color: #333;
        border: none;
        padding: 12px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-size: 1.2rem;
        transition: all 0.3s ease;
    `;
    
    let isDark = false;
    
    themeButton.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('dark-theme', isDark);
        themeButton.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        // 保存主题偏好
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // 加载保存的主题
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeButton.click();
    }
    
    document.body.appendChild(themeButton);
}

// 加载图片功能
function loadImages() {
    // 为每个section加载对应的图片
    const sectionMapping = {
        'job1': 'job1',
        'gap': 'gap', 
        'job2': 'job2',
        'gap2': 'gap2',
        'job-search': 'jobSearch',  // HTML ID映射到workData key
        'new-start': 'newStart'     // 新起点也包含图片
    };
    
    Object.keys(sectionMapping).forEach(sectionId => {
        const dataKey = sectionMapping[sectionId];
        const sectionData = workData[dataKey];
        if (sectionData && sectionData.image) {
            const imagePlaceholder = document.querySelector(`#${sectionId} .image-placeholder`);
            if (imagePlaceholder) {
                const img = document.createElement('img');
                img.src = sectionData.image;
                img.alt = `${sectionData.title}图片`;
                img.style.cssText = 'max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; border-radius: 15px; display: block; background: #f8f9fa; margin: auto;';
                
                img.onload = () => {
                    imagePlaceholder.innerHTML = '';
                    imagePlaceholder.appendChild(img);
                    // 确保图片容器有正确的高度和样式
                    imagePlaceholder.style.minHeight = '350px';
                    imagePlaceholder.style.maxHeight = '500px';
                    imagePlaceholder.style.padding = '10px';
                    imagePlaceholder.style.border = 'none';
                    imagePlaceholder.style.background = 'transparent';
                    imagePlaceholder.style.display = 'flex';
                    imagePlaceholder.style.alignItems = 'center';
                    imagePlaceholder.style.justifyContent = 'center';
                };
                
                img.onerror = () => {
                    console.log(`图片加载失败: ${sectionData.image}`);
                    // 保持占位符显示
                };
            }
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化所有功能
    updateDurations();
    initNavigation();
    initScrollAnimations();
    initImageUpload();
    initKeyboardNavigation();
    initShareFunction();
    initThemeToggle();
    loadImages(); // 加载图片
    
    // 延迟更新求职统计，确保动画效果
    setTimeout(updateJobSearchStats, 1000);
    
    console.log('工作历程记录网站已加载完成！');
});

// 添加深色主题样式
const darkThemeCSS = `
    .dark-theme {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    }
    
    .dark-theme .main-content {
        background: #2c3e50;
        color: #ecf0f1;
    }
    
    .dark-theme .section-header h2 {
        color: #ecf0f1;
    }
    
    .dark-theme .text-content h3 {
        color: #ecf0f1;
    }
    
    .dark-theme .text-content p {
        color: #bdc3c7;
    }
    
    .dark-theme .highlight-box {
        background: linear-gradient(135deg, #34495e, #2c3e50);
        color: #ecf0f1;
    }
    
    .dark-theme .nav-item {
        background: #34495e;
        color: #ecf0f1;
    }
    
    .dark-theme .nav-item:hover {
        background: #2c3e50;
    }
    
    .dark-theme .image-placeholder {
        background: linear-gradient(135deg, #34495e, #2c3e50);
        border-color: #7f8c8d;
        color: #bdc3c7;
    }
    
    .dark-theme .stat-item {
        background: #34495e;
        color: #ecf0f1;
    }
`;

// 动态添加深色主题样式
const style = document.createElement('style');
style.textContent = darkThemeCSS;
document.head.appendChild(style);
