#!/bin/bash

echo "Copying custom default.conf over to /etc/nginx/sites-available/default"

NGINX_CONF=/home/nginx/default

if [ -f "$NGINX_CONF" ]; then
    cp "$NGINX_CONF" /etc/nginx/default
    service nginx reload
else
    echo "File does not exist, skipping cp."
fi