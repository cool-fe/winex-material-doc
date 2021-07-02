#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"


git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/cool-fe/winex-material-doc.git master:gh-pages

cd -

rm -rf docs/.vuepress/dist