FROM nginx:alpine

# Install envsubst (part of gettext) for templating
RUN apk add --no-cache bash gettext

# Copy template and entrypoint
COPY default.conf.template /etc/nginx/templates/default.conf.template
COPY entrypoint.sh /docker-entrypoint.d/20-envsubst.sh
RUN chmod +x /docker-entrypoint.d/20-envsubst.sh

# Static files will be mounted at /usr/share/nginx/html
# ACME webroot will be at /var/www/certbot
RUN mkdir -p /var/www/certbot

EXPOSE 80 443

# Use the base image's entrypoint which runs scripts in /docker-entrypoint.d then starts nginx
CMD ["nginx", "-g", "daemon off;"]
