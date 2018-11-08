FROM microportal/nginx-kong:latest

ENV SERVICE_NAME=portal-app2 \
    SERVICE_URL=http://portal-app2:80/ \
    SERVICE_PATHS=/app2

COPY release /usr/share/nginx/html