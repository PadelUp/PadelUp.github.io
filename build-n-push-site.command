#!/bin/bash
bundle exec jekyll build &&\
# read -p "Commit description: " desc && \
git add . && \
git commit -m "update"
git push