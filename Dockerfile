FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# CHANGE: Use 'install' instead of 'ci' to automatically fix lockfile mismatches
RUN npm install

# Copy the rest of the application
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Host flag is required for Docker networking
CMD ["npm", "run", "dev", "--", "--host"]