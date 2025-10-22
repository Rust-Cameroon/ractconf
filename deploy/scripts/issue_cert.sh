#!/usr/bin/env bash
set -euo pipefail

# Load env vars from deploy/.env if present
ENV_FILE_DIR=$(dirname "$0")/..
if [ -f "$ENV_FILE_DIR/.env" ]; then
  set -o allexport
  # shellcheck disable=SC1090
  source "$ENV_FILE_DIR/.env"
  set +o allexport
fi

: "${DOMAIN:?Please set DOMAIN in deploy/.env}"
: "${EMAIL:?Please set EMAIL in deploy/.env}"

# Ensure nginx is up to serve HTTP for webroot challenge
DOCKER_COMPOSE="docker compose"
$DOCKER_COMPOSE -f "$ENV_FILE_DIR/docker-compose.yml" up -d nginx

# Obtain/renew certificate via webroot
$DOCKER_COMPOSE -f "$ENV_FILE_DIR/docker-compose.yml" run --rm certbot \
  certonly --webroot \
  --webroot-path /var/www/certbot \
  -d "$DOMAIN" \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email

# Re-render nginx config to switch to HTTPS, then reload
$DOCKER_COMPOSE -f "$ENV_FILE_DIR/docker-compose.yml" exec -T nginx /docker-entrypoint.d/20-envsubst.sh
$DOCKER_COMPOSE -f "$ENV_FILE_DIR/docker-compose.yml" exec -T nginx nginx -s reload

echo "Certificate obtained/updated for $DOMAIN"
