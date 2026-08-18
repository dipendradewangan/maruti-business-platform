# Maruti Business Platform - Backend

FROM node:22-alpine

WORKDIR /app

# Copy dependency files first for Docker layer caching
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy backend source code
COPY . .

# Express API port
EXPOSE 5000

# Start application
CMD ["node", "server.js"]