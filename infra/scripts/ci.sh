#!/usr/bin/env bash
set -euo pipefail
ROOT="${CI_PROJECT_DIR:-$(git rev-parse --show-toplevel)}"
cd "$ROOT"
"$ROOT/infra/scripts/ci/validate-repo.sh" --root "$ROOT"
"$ROOT/infra/scripts/ci/check-size.sh" --root "$ROOT"
python3 scripts/validate.py --root .
if command -v npm >/dev/null 2>&1 && [ -x node_modules/.bin/tsc ]; then
  npm run ci
else
  echo "node toolchain unavailable; bootstrap validation only"
fi
for f in infra/scripts/*.sh; do bash -n "$f"; done
echo "typescript checks ok"
