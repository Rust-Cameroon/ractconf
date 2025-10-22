#!/usr/bin/env bash
set -euo pipefail

: "${DOMAIN:?DOMAIN env var must be set}"

# Choose template based on whether certs exist for the domain
HTTPS_TEMPLATE="/etc/nginx/templates/default.conf.template"
HTTP_TEMPLATE="/etc/nginx/templates/default.http.conf.template"
TARGET="/etc/nginx/conf.d/default.conf"

if [ -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ] && [ -f "/etc/letsencrypt/live/${DOMAIN}/privkey.pem" ]; then
  envsubst '${DOMAIN}' < "$HTTPS_TEMPLATE" > "$TARGET"
  echo "Rendered HTTPS Nginx config for ${DOMAIN}"
else
  envsubst '${DOMAIN}' < "$HTTP_TEMPLATE" > "$TARGET"
  echo "Rendered HTTP-only Nginx config for ${DOMAIN} (no certs yet)"
fi
