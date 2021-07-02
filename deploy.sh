#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git config --global user.name "405163706@qq.com"
git config --global user.email "405163706@qq.com"

git init

git add -A
git commit -m 'deploy'

git push -f https://github.com/cool-fe/winex-material-doc.git master:gh-pages

cd -

rm -rf docs/.vuepress/dist