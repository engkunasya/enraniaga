# Use the Nginx base image
FROM nginx:alpine

# Copy the production build (dist) into Nginx's web directory
COPY dist/ /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
