#!/bin/bash

# 图片添加助手脚本
# 帮助快速添加和重命名图片文件

echo "🖼️  工作历程记录网站 - 图片添加助手"
echo "=================================="

# 检查images文件夹是否存在
if [ ! -d "images" ]; then
    echo "📁 创建images文件夹..."
    mkdir -p images
fi

echo "📋 请按照以下步骤添加图片："
echo ""
echo "1. 将图片文件复制到以下位置："
echo "   /Users/ningzhang/lanyun/happy_work/images/"
echo ""
echo "2. 按照以下命名规则重命名文件："
echo "   - job1.jpg          # 第一份工作"
echo "   - gap1.jpg          # 第一次Gap（成都、合川、玉林）"
echo "   - job2_haifaner.jpg # 嗨范儿工作"
echo "   - gap2.jpg          # 第二次Gap"
echo "   - job_search.jpg    # 求职历程"
echo "   - new_start_mcn.jpg # 新工作（MCN大厂）"
echo ""
echo "3. 图片要求："
echo "   - 格式：JPG、PNG、WebP"
echo "   - 大小：不超过2MB"
echo "   - 尺寸：建议800-1200px宽，600-800px高"
echo ""

# 检查当前images文件夹中的文件
echo "📂 当前images文件夹中的文件："
if [ -d "images" ] && [ "$(ls -A images)" ]; then
    ls -la images/
else
    echo "   (文件夹为空)"
fi

echo ""
echo "💡 提示："
echo "   - 你可以直接拖拽图片文件到images文件夹"
echo "   - 或者在网页中点击图片占位符上传"
echo "   - 添加图片后记得更新config.js中的路径"
echo ""
echo "🔗 查看详细说明："
echo "   cat 图片配置示例.md"
