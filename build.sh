#!/bin/sh

./bin/py yaml2json.py cv.yaml output/resume.json
cd output/
../bin/resume export cv --format pdf
../bin/resume export index --format html
cd ..
./bin/ghp-import -n -p -m "Update CV" output/
