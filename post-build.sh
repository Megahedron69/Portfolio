#!/bin/bash

dest="dist/netlify.toml"

if [ ! -d dist ]; then
  echo "Dist folder does not exist."
  exit 1
fi

cat <<EOL > "$dest"
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOL

echo "Redirect rules added"
