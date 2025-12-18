# Step 1: Use Node.js LTS version as base image
FROM node:18-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all project files into the container
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 3000

# Step 7: Start the app
CMD ["npm", "run", "dev"]
