# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy built files & node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["node", "dist/main"]
