#!/usr/bin/env bash
set -euo pipefail

if [ -z "${BASE_URL:-}" ]; then echo "Set BASE_URL"; exit 1; fi

docker run --rm -t owasp/zap2docker-stable zap-baseline.py -t "$BASE_URL" -m 5 -r zap_report.html || true

echo "ZAP report saved to zap_report.html"