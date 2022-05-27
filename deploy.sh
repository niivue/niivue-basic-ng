#!/bin/bash
# abort on errors
set -e

# build
npm run build

GIT_REPO_URL=$(git config --get remote.origin.url)

mkdir .deploy
cp -R ./dist/niivue-basic-ng/* .deploy
cd .deploy
git init .
git remote add github $GIT_REPO_URL
git checkout -b gh-pages
git add .
git commit -am "Static site deploy"
git push github gh-pages --force
cd ..
rm -rf .deploy