# Server Base Template

## Description

This repository serves as a template for quickly setting up Node.js servers using Express. It includes basic setup and configurations to help you start building your application swiftly.

## Project Structure

The project is organized into the following parts:

- `src`: Contains the source code for the server.

## Table of Contents

- [Server Base Template](#server-base-template)
  - [Description](#description)
  - [Project Structure](#project-structure)
  - [Environment Setup](#environment-setup)
    - [Requirements](#requirements)
    - [Installation](#installation)
    - [Using the Template](#using-the-template)
  - [Running the Application](#running-the-application)
    - [Docker](#docker)
  - [Dependabot](#dependabot)
  - [Folder Structure](#folder-structure)
  - [Development](#development)
    - [Style Guide](#style-guide)
    - [Testing](#testing)
      - [Running Tests](#running-tests)
  - [Contributing](#contributing)
  - [License](#license)

## Environment Setup

### Requirements

- Node.js >= 20.0.0
- npm >= 7.0.0
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

```bash
 git clone https://github.com/hectorplinio/server-base.git
 cd server-base
```

2. Install the dependencies:

```bash
 npm install
```

### Using the Template

To create a new repository using this template:

1. Go to the [template repository](https://github.com/hectorplinio/server-base).
2. Click on "Use this template".
3. Create your new repository.

## Running the Application

To run the application we are going to use Docker.

### Docker

Use the following commands:

1. Build the Docker image:

```bash
 docker build -t server-base .
```

2. Run the Docker container:

```bash
 docker run -p 3010:3010 server-base
```

## Dependabot

This repository uses Dependabot to keep dependencies up-to-date. The configuration is in the `.github/dependabot.yml` file.

## Folder Structure

```plaintext
server-base/
├── src/ # Source code
│ ├── index.ts # Initialize the app
│ └── ... # Other source files
├── .github/ # GitHub configuration files
├── Dockerfile # Dockerfile for containerization
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```

## Development

### Style Guide

Before submitting a patch, please make sure that the code is formatted by executing this command:

```bash
npm run format
```

### Testing

Testing is crucial for us and we strive for high coverage of our code.

We encourage you to write tests for every functionality you build and also update the existing ones if they need to.

#### Running Tests

Before running the tests, install the needed dependencies:

```bash
npm install
```

Execute all tests with:

```bash
npm run test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.
