
# Step 1: Select Node.js base image
FROM node:24-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy dependency files
COPY package*.json ./

# Step 4: Install production dependencies
RUN npm ci --omit=dev

# Step 5: Copy application files
COPY app.js server.js ./

# Step 6: Copy frontend
COPY public ./public

# Step 7: Set production environment
ENV NODE_ENV=production

# Step 8: Document application port
EXPOSE 10000

# Step 9: Start application
CMD ["node", "server.js"]
