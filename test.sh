#!/bin/bash
for file in $(find src -name "*.js"); do
  mv "$file" "${file%.js}.jsx"
done
