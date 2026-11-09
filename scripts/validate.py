#!/usr/bin/env python3
from __future__ import annotations
import argparse, json, sys
from pathlib import Path

def main() -> int:
    ap = argparse.ArgumentParser(); ap.add_argument("--root", default=".")
    root = Path(ap.parse_args().root)
    pkg_path = root / "package.json"
    if not pkg_path.is_file():
        print("missing package.json", file=sys.stderr); return 1
    pkg = json.loads(pkg_path.read_text())
    if pkg.get("name") != "@gardusi-gustavo/ts":
        print("unexpected package name", file=sys.stderr); return 1
    for name in ("tsconfig.json", "tsconfig.test.json", "src/index.ts", "examples/react-app/src/App.tsx"):
        if not (root / name).is_file():
            print(f"missing {name}", file=sys.stderr); return 1
    bad = [p for p in root.rglob("*") if p.is_file() and p.suffix in {".js", ".mjs", ".cjs"} and ".git" not in p.parts and "node_modules" not in p.parts]
    if bad:
        print("committed JavaScript: " + ", ".join(str(p) for p in bad), file=sys.stderr); return 1
    print("typescript validation ok")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
