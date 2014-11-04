#!/bin/sh

./bin/py yaml2json.py cv.yaml output/resume.json
cd output/
../bin/resume export cv --format pdf --theme elegant-compact
../bin/resume export index --format html --theme elegant-compact
cd ..
./bin/ghp-import -n -p -m "Update CV" output/
