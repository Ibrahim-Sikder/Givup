# Use official Node.js image as the base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller base image for production
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy the built Next.js app from the builder image
COPY --from=builder /app ./

# Expose the application port (you can modify this if needed)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
