#!/bin/bash
bundle exec jekyll build &&\
cd _site && \
echo "www.padel-up.it" > CNAME && \
read -p "Commit description: " desc && \
git add -A && \
git commit -m "up"
git push