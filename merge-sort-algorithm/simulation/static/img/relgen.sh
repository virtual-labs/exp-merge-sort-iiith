#!/bin/bash

for filename in *.png; 
    do
      echo  "\"$filename\": {
      \"resource_type\": \"Image\",
      \"url\": \"/build/code/static/img/$filename\"
      },";
    done
