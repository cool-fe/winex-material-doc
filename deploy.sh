#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist


# 配置仓库地址
if [ -n "${EXTERNAL_REPOSITORY}" ]; then
    PUBLISH_REPOSITORY=${EXTERNAL_REPOSITORY}
else
    PUBLISH_REPOSITORY=${GITHUB_REPOSITORY}
fi

# 配置ssh
if [ -n "${ACCESS_TOKEN_DEPLOY}" ]; then
    echo "设置 ACCESS_TOKEN_DEPLOY"
    SSH_DIR="${HOME}/.ssh"
    mkdir "${SSH_DIR}"
    ssh-keyscan -t rsa github.com >"${SSH_DIR}/known_hosts"
    echo "${ACCESS_TOKEN_DEPLOY}" >"${SSH_DIR}/id_rsa"
    chmod 400 "${SSH_DIR}/id_rsa"
    remote_repo="git@github.com:${PUBLISH_REPOSITORY}.git"
fi


git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"


git init

git add -A
git commit -m 'deploy'

git push -f https://github.com/cool-fe/winex-material-doc.git master:gh-pages

cd -

rm -rf docs/.vuepress/dist