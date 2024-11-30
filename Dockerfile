# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app for production
RUN npm run build

# Use a smaller image for serving the app
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy only the built application from the previous image
COPY --from=build /app ./

# Install the production dependencies
RUN npm install --production

# Expose the port on which the Next.js app will run
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
