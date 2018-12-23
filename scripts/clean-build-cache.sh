#!/bin/bash
git clean ./ios/ -dfx
git clean ./android/ -dfx
rm -rf android/build
rm -rf android/app/build
rm -rf ios/build
rm -rf test_cache/
rm package-lock.json
watchman watch-del-all
lsof -n -i4TCP:8081 | sed '1 d' | awk '{print $2}' | xargs kill -9