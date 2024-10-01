# Use the official Node.js image
FROM node:16-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Prisma client
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]
