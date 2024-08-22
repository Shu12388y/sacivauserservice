# Base image: Use the official Ubuntu image
FROM ubuntu

# Set working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    unzip

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Copy package.json and install dependencies using Bun
#
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs


RUN apt-get update && apt-get upgrade

COPY package*.json ./
RUN bun install

# Copy the Prisma schema and generate the Prisma client
# COPY prisma ./prisma
COPY . .

RUN npx prisma generate


# Expose the port the application runs on
EXPOSE 3001

# Command to run the application
CMD ["bun", "run", "index.ts"]
