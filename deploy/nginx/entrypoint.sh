#!/usr/bin/env bash
set -euo pipefail

: "${DOMAIN:?DOMAIN env var must be set}"
CERT_NAME="${CERT_NAME:-$DOMAIN}"

# Choose template based on whether certs exist for the domain
HTTPS_TEMPLATE="/etc/nginx/templates/default.conf.template"
HTTP_TEMPLATE="/etc/nginx/templates/default.http.conf.template"
TARGET="/etc/nginx/conf.d/default.conf"

if [ -f "/etc/letsencrypt/live/${CERT_NAME}/fullchain.pem" ] && [ -f "/etc/letsencrypt/live/${CERT_NAME}/privkey.pem" ]; then
  envsubst '${DOMAIN} ${CERT_NAME}' < "$HTTPS_TEMPLATE" > "$TARGET"
  echo "Rendered HTTPS Nginx config for ${DOMAIN} using cert ${CERT_NAME}"
else
  envsubst '${DOMAIN} ${CERT_NAME}' < "$HTTP_TEMPLATE" > "$TARGET"
  echo "Rendered HTTP-only Nginx config for ${DOMAIN} (no certs yet)"
fi
