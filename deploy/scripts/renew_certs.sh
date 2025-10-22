#!/usr/bin/env bash
set -euo pipefail

ENV_FILE_DIR=$(dirname "$0")/..

DOCKER_COMPOSE="docker compose"

$DOCKER_COMPOSE -f "$ENV_FILE_DIR/docker-compose.yml" run --rm certbot renew --webroot -w /var/www/certbot
$DOCKER_COMPOSE -f "$ENV_FILE_DIR/docker-compose.yml" exec -T nginx /docker-entrypoint.d/20-envsubst.sh
$DOCKER_COMPOSE -f "$ENV_FILE_DIR/docker-compose.yml" exec -T nginx nginx -s reload
