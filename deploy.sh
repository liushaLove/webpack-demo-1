yarn build &&
git checkout gh-pages &&
mv dist/* ./ && 
rm -rf dist;
git add . && 
git commit -m 'update' &&
git push && 
git checkout master