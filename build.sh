#!/bin/bash

echo "=================================="
echo "Start build..."

cd ./_source
hugo -D -d ./../ --minify

echo "build success"
echo "=================================="

