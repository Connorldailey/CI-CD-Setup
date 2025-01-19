# GitHub Actions CI/CD Setup

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

As applications scale and develop, ensuring software quality and seamless deployment becomes crucial. This project implements a CI/CD pipeline using GitHub Actions to automatically test and deploy a full-stack application. 

- **Continuous Integration (CI):** Cypress component tests are triggered when a Pull Request is made to the `develop` branch, ensuring code quality before merging.
- **Continuous Deployment (CD):** When code is merged from the `develop` branch to the `main` branch, the application is deployed to Render.

This workflow ensures clean integrations, proper quality checks, and the deployment of the latest code.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To set up and run the application in development mode, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone git@github.com:Connorldailey/CI-CD-Setup.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd CI-CD-Setup
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Set Up Environment Variables:**
    - Create a `.env` file in the `server` directory.
    - Use the `.env.example` file as a template, filling in the necessary values.
    
    ```bash
    cp server/.env.example server/.env
    ```

5. **Build the Application:**
    ```bash
    npm run build
    ```

6. **Seed the Database:**
    ```bash
    npm run seed
    ```

7. **Launch the Application:**
    ```bash
    npm run develop
    ```

## Usage

Below are steps for using the application:

1. **Development Workflow:**
    - Create feature branches for new work.
    - Open a Pull Request to the `develop` branch.
    - Verify that Cypress tests pass in the GitHub Actions workflow.
    - Merge approved changes into the `develop` branch.

2. **Deployment Workflow:**
    - Merge the `develop` branch into `main`.
    - GitHub Actions will trigger a deployment to Render using the configured deploy hook.
    - The application will be live at the deployed URL.

**Access the Application** 
    - Visit the [live site](https://ci-cd-setup-qkp8.onrender.com).

## Credits

- **Application and Component Test Provided By:** The Ohio State University Coding Bootcamp
- **CI/DI Setup By:** [Connor Dailey](https://github.com/connorldailey)

## License

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details. 

## Contributing

Contributions are currently not being accepted. Thank you for your interest!

## Tests

This project uses Cypress for component testing. The GitHub Actions workflow will automatically execute these tests for any Pull Request to the `develop` branch. 
Ensure all tests pass before merging.

## Questions

If you have any questions about this project, feel free to reach out: 

- **GitHub:** [connorldailey](https://github.com/connorldailey)
- **Email:** connorldailey@gmail.com