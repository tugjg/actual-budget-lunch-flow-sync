# Use an official Node.js runtime as a parent image
FROM node:25

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Define the command to run the application (e.g., you can use npx here)
# The actual entry point will depend on your specific use case.
# For a persistent service, you might run a server script.
# If you just need to execute a one-off task, consider a Cloud Run Job instead.
CMD ["npx", "@lunchflow/actual-flow", "import"]

