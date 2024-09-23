#!/bin/bash

dest="dist/netlify.toml"

# Ensure space after [ and before ]
if [ ! -d dist ]; then
  echo "Dist folder does not exist."
  exit 1
fi

# Properly format the here-document and make sure the EOL is on a separate line
cat <<EOL > "$dest"
[build]
  publish = "dist"
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOL

echo "Redirect rules added"
