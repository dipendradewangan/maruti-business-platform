# ============================================
# Maruti Business Platform - Frontend
# React + Vite + Tailwind CSS
# ============================================

# ---------- Build Stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy frontend source
COPY . .

# Build production application
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite production build
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose Nginx HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]  