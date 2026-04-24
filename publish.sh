#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: ./publish.sh \"commit message\""
  exit 1
fi

commit_message="$1"

git status
git add .
git commit -m "$commit_message"
git push origin main
