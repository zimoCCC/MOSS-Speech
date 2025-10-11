#!/bin/bash

# 工作历程记录网站部署脚本
# 用于快速部署到GitHub Pages

echo "🚀 开始部署工作历程记录网站到GitHub Pages..."

# 检查是否在Git仓库中
if [ ! -d ".git" ]; then
    echo "📦 初始化Git仓库..."
    git init
fi

# 添加所有文件
echo "📝 添加文件到Git..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "Update work journey website - $(date '+%Y-%m-%d %H:%M:%S')"

# 检查远程仓库
if ! git remote | grep -q origin; then
    echo "⚠️  请先设置远程仓库："
    echo "   git remote add origin https://github.com/你的用户名/仓库名.git"
    echo "   然后重新运行此脚本"
    exit 1
fi

# 推送到GitHub
echo "🌐 推送到GitHub..."
git push origin main

echo "✅ 部署完成！"
echo "🔗 你的网站应该可以在以下地址访问："
echo "   https://你的用户名.github.io/仓库名/happy_work/"
echo ""
echo "📋 部署后请检查："
echo "   1. GitHub仓库设置中已启用Pages"
echo "   2. 源分支设置为main"
echo "   3. 源文件夹设置为根目录或happy_work文件夹"
echo ""
echo "🎉 祝你的女朋友工作顺利！"
