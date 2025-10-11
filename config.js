// 工作历程记录网站配置文件
// 请根据实际情况修改以下数据

const CONFIG = {
    // 网站基本信息
    site: {
        title: '工作历程记录',
        subtitle: '从迷茫到新起点，记录每一个重要的时刻',
        author: '你的名字' // 可选
    },

    // 第一份工作
    job1: {
        startDate: '2024-12-16',    // 开始日期 (YYYY-MM-DD)
        endDate: '2024-12-21',      // 结束日期 (YYYY-MM-DD)
        title: '第一份工作',
        company: '公司名称',         // 公司名称
        position: '职位名称',        // 职位名称
        description: '这份工作不怎么顺利，上司也刁难人，只做了几天，咱不受这气',
        achievements: [
            '学会了如何在上司旁边偷偷带耳机听歌'
        ],
        skills: ['技能1', '技能2', '技能3'], // 学到的技能
        image: 'images/job1.jpg' // 图片路径
    },

    // Gap期间
    gap: {
        startDate: '2024-12-21',    // 开始日期
        endDate: '2025-02-25',      // 结束日期
        title: 'Gap期间',
        description: '工作累啦，回家过个年再说，这段时间我们迎来了"神仙般的日子"',
        activities: [
            "成都发了一次烧",
            "合川玩了一圈",
            "带你一起临时买票回玉林"
        ],
        learnings: ['学习内容1', '学习内容2', '学习内容3'], // 学习内容
        image: 'images/gap1.jpg' // 图片路径
    },

    // 第二份工作
    job2: {
        startDate: '2025-02-25',    // 开始日期
        endDate: '2025-07-17',      // 结束日期
        title: '第二份工作',
        company: '嗨范儿',         // 公司名称
        position: '职位名称',        // 职位名称
        description: '在这里呆了很久很久，跟小思姐斗智斗勇，当然也学到了不少东西',
        achievements: [
            '吃遍了重庆北站附近的外卖',
            '习惯了下班地铁上的电话',
            '每次去重庆，一出站就能见到你，真的很开心'
        ],
        challenges: ['挑战1', '挑战2', '挑战3'], // 面临的挑战
        image: 'images/job2_haifaner.jpg' // 图片路径
    },

    // 第二次Gap
    gap2: {
        startDate: '2025-07-17',    // 开始日期
        endDate: '2025-08-31',      // 结束日期
        title: '第二次Gap',
        description: '从嗨范儿离职后的休息时间，调整状态准备新的开始。可以记录这段时间的休息、思考、准备等内容。',
        activities: [
            '好好休息调整状态',
            '思考未来的职业方向',
            '享受难得的自由时光',
            '为下一份工作做准备',
            '处理一些个人事务',
            '与朋友家人共度时光'
        ],
        learnings: ['学习内容1', '学习内容2', '学习内容3'], // 学习内容
        image: 'images/gap2.jpg' // 图片路径
    },

    // 求职历程
    jobSearch: {
        startDate: '2025-09-01',    // 开始日期
        endDate: '2025-10-11',      // 结束日期
        title: '艰难的找工作历程',
        description: '一个多月的7休，焦虑和压力让人忍俊不禁。',
        stats: {
            applications: 25,        // 投递简历数量
            interviews: 8,           // 面试次数
            offers: 3               // 收到offer数量
        },
        experiences: [
            '投递了多份简历到不同公司',
            '参加了多次面试，积累了经验',
            '学会了如何更好地展示自己',
            '遇到了挫折但也收获了成长',
            '最终找到了心仪的工作'
        ],
        tips: ['求职建议1', '求职建议2', '求职建议3'], // 求职建议
        image: 'images/job_search.jpg' // 图片路径
    },

    // 新起点
    newStart: {
        startDate: '2025-10-11',    // 开始日期
        title: '新起点',
        company: '新公司',       // 新公司名称
        position: '新职位名称',      // 新职位名称
        description: '经过努力，终于找到了心仪的工作！这是一个全新的开始。',
        highlights: [
            'MCN大厂',
            '全新的工作内容',
            '良好的发展前景',
            '优秀的团队氛围',
            '终于不用再找工作了'
        ],
        goals: ['目标1', '目标2', '目标3'], // 新工作的目标
        image: 'images/new_start_mcn.png' // 图片路径
    },

    // 主题设置
    theme: {
        primaryColor: '#667eea',    // 主色调
        secondaryColor: '#764ba2',  // 辅助色
        accentColor: '#ffd700',     // 强调色
        fontFamily: 'Noto Sans SC'  // 字体
    },

    // 社交媒体链接（可选）
    social: {
        github: '',     // GitHub链接
        linkedin: '',   // LinkedIn链接
        email: ''       // 邮箱
    }
};

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// 使用说明：
// 1. 修改上面的日期、公司名称、职位等信息
// 2. 根据实际情况调整成就、活动、挑战等内容
// 3. 可以添加图片路径，将图片放在images文件夹中
// 4. 修改主题颜色以匹配个人喜好
// 5. 保存文件后刷新网页查看效果
