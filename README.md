<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

<h2>BLITZ BOILERPLATE</h2>

<a href="https://github.com/surelle-ha/Blitz-Boilerplate/actions/workflows/gh-registry.yml">
  <img src="https://github.com/surelle-ha/Blitz-Boilerplate/actions/workflows/gh-registry.yml/badge.svg" alt="⚡ Github Registry">
</a>

<a href="https://github.com/surelle-ha/Blitz-Boilerplate/actions/workflows/npm-registry.yml">
  <img src="https://github.com/surelle-ha/Blitz-Boilerplate/actions/workflows/npm-registry.yml/badge.svg" alt="⚡ NPM Registry">
</a>


<img align="right" width=200px alt="Unicorn" src="https://cdn3d.iconscout.com/3d/free/thumb/free-nestjs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--javascript-typescript-node-js-server-side-coding-lang-pack-logos-icons-7578005.png"/>

A comprehensive boilerplate specifically tailored for creating and organizing a NestJS package. It serves as a foundational framework equipped with all the necessary configurations to streamline the development process. This boilerplate provides a robust and scalable structure, ensuring best practices are adhered to while building NestJS packages. 

It includes essential setup files, pre-configured tools, and integrations, allowing developers to focus on coding functionality without worrying about setting up the initial project structure. Ideal for those seeking a ready-to-use solution for rapid development and efficient package management in NestJS.

<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

## Installation Instructions

To begin developing with Blitz, fork or clone this repository using the command below:
``` bash
git clone https://github.com/surelle-ha/Blitz-Boilerplate
```
After cloning, update the details in package.json as needed. Next, install the required dependencies for the boilerplate:
```
npm install
```

## Development Instructions

After a fresh installation, your `src` directory should look like the following structure. You may modify it based on your needs, but ensure that the `index.ts` file is not removed:
```
📦src
 ┣ 📜blitz.controller.ts
 ┣ 📜blitz.module.ts
 ┣ 📜blitz.service.ts
 ┗ 📜index.ts
```
When you finish developing your package, make sure to update the `index.ts` file accordingly:
``` typescript
export * from "./blitz.module";
export * from "./blitz.service";
export * from "./blitz.controller";
```
To build and test your package locally, run the following command:
``` bash
npm run build && npm link
```
This will make your package available for local use. To test your package, navigate to another NestJS project and install your package:
```
npm install @username/blitz-boilerplate
```
> Note: Replace @username/blitz-boilerplate with your updated package name if it has been changed.

## Deployment Instructions

This boilerplate comes with two pre-configured GitHub workflows: one for pushing the package to GitHub Registry, and another for pushing it to the NPM Registry.

No configuration is needed for the GitHub Registry action. However, for the NPM Registry action, you'll need to generate an Access Token from the NPM website. After that, create a repository secret on your GitHub account named NPM_TOKEN. Once this is done, both workflows will succeed.

<div align="center">

</div>

## Quick Start for Contributors

To get started, here’s what you need to know:

### Code of Conduct

We prioritize creating a respectful and inclusive environment. Please review and adhere to our Code of Conduct to ensure a positive experience for all collaborators.

### Reporting Bugs

If you find a bug in the codebase:

1. **Check Existing Issues:** Verify if the issue has already been reported to avoid duplication.
2. **Create a Detailed Issue:** Include a descriptive title, a clear explanation of the problem, steps to reproduce, and the expected outcome.

### Feature Requests

To suggest a new feature:

1. **Search Existing Suggestions:** Check if someone else has already proposed something similar.
2. **Submit a New Issue:** Clearly describe the proposed feature, its benefits, and possible implementations.

## How to Contribute Code

### Setting Up Your Development Environment

1. **Fork the Repository:** Start by forking the project repository on GitHub.
2. **Clone Your Fork:** Clone your forked repository to your local machine.
3. **Install Dependencies:** Navigate to the project directory and run `npm install` to install required dependencies.

### Making Changes

1. **Create a New Branch:** Use a branch specific to the feature or fix you are working on.
2. **Commit Changes:** Make your changes in the new branch. Commit messages should clearly explain the purpose of the changes.
3. **Write Tests:** Add or update tests to cover the new functionality or fixes. Ensure all tests pass.

### Pull Request Process

1. **Update Your Branch:** Rebase your branch on the latest main branch to ensure a smooth integration.
2. **Submit a Pull Request (PR):** Push your branch to GitHub and open a PR against the main branch of the original project repository.
3. **Review Process:** The project maintainer will review your PR. Be open to making revisions based on feedback.
4. **PR Approval and Merge:** Once approved, the maintainers will merge your PR.

## Additional Resources

-   **Documentation:** Familiarize yourself with the project documentation to understand how to use and extend the project.
-   ~~**Community:** Join our community forums or chat channels to discuss ideas and ask questions.~~

## Acknowledgments

Contributors who help improve the project make a significant impact. We appreciate your dedication and effort in enhancing this project.

Thank you for choosing to contribute to the project. We look forward to your contributions!

<a href="https://github.com/surelle-ha/CLI-Tool-Boilerplate/graphs/contributors">
<img src="https://contrib.rocks/image?repo=surelle-ha/CLI-Tool-Boilerplate" />
</a>

#

<img width="200px" src="https://i.ibb.co/F72MdpH/surellebanner1512.png" alt="surellebanner1512" border="0"/>
