# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Set the working directory to current directory
WORKDIR ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Set the command to run when the container starts
CMD ["npm", "start"]