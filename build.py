#!/usr/bin/env python
import yaml
import json
import argparse

if __name__ == '__main__':

    parser = argparse.ArgumentParser(description='Convert yaml to json.')
    parser.add_argument('input')
    parser.add_argument('output')
    config = parser.parse_args()

    with open(config.input, 'r') as content:
        data = yaml.load(content)

    with open(config.output, 'w') as output:
        json.dump(data, output)
