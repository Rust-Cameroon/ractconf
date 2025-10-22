# Docker + Nginx + Let's Encrypt Deployment

This deploy serves the static site in this repo via Nginx and provisions TLS with Let's Encrypt using the webroot method.

## Files
- `deploy/docker-compose.yml` Orchestrates Nginx and Certbot containers.
- `deploy/nginx/` Custom Nginx image that templates `DOMAIN` into config.
- `deploy/scripts/issue_cert.sh` One-off script to obtain the initial cert.
- `deploy/scripts/renew_certs.sh` Renewal script; put in cron.
- `deploy/.env.example` Copy to `.env` and set `DOMAIN` and `EMAIL`.

## Prerequisites
- DNS A/AAAA record for your `DOMAIN` points to this server.
- Docker and Docker Compose v2 installed.

## Setup
1. Copy env file
   ```bash
   cp deploy/.env.example deploy/.env
   # edit DOMAIN and EMAIL
   ```
2. Build and start Nginx
   ```bash
   docker compose -f deploy/docker-compose.yml up -d --build nginx
   ```
3. Obtain certificate
   ```bash
   bash deploy/scripts/issue_cert.sh
   ```
4. Visit `https://$DOMAIN`.

## Renewal
- Add a cron (as root) to run daily:
  ```cron
  0 3 * * * bash /path/to/repo/deploy/scripts/renew_certs.sh >> /var/log/certbot-renew.log 2>&1
  ```

## Notes
- Static content is served from the repo root mounted read-only to `/usr/share/nginx/html`.
- ACME challenges are served from `/var/www/certbot` via the `certbot` volume.
- SSL certs are stored in the `certs` volume at `/etc/letsencrypt`.
