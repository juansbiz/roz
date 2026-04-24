# ROZ Frontend - Serve pre-built static files
FROM nginx:alpine

COPY dist /usr/share/nginx/html

RUN echo 'events { worker_connections 1024; } http { \
    include /etc/nginx/mime.types; \
    default_type application/octet-stream; \
    server { \
        listen 80; \
        server_name localhost; \
        root /usr/share/nginx/html; \
        index index.html; \
        location / { \
            try_files $uri /index.html; \
        } \
    } \
}' > /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
