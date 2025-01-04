# React Storybook Project

This repository contains a React project with **Storybook** integration. The project is designed to showcase and document reusable components for React applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Using Storybook](#using-storybook)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Storybook is an open-source tool for developing UI components in isolation. This project demonstrates how to use Storybook alongside a React application to create, test, and document components effectively.

## Features

- React-based component library.
- Storybook integration for visual testing and documentation.
- Live reload for real-time updates.
- Support for custom add-ons and configurations.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/InspectorAB/StoryBookReact.git

2. Navigate to the project directory:

   cd storybook-react-project

3. Install dependencies:

   npm install

Scripts

The following scripts are available in this project:

    Start the React app:

        npm start

        Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

    Start Storybook:

        npm run storybook

        Launches Storybook for component development. Open http://localhost:6006 to view it.

    Build React app for production:

        npm run build

        Creates an optimized production build.

    Build Storybook:

        npm run build-storybook

Using Storybook

Storybook is configured to load stories from the src/components directory. Each component can have one or more associated .stories.js or .stories.jsx files.

Adding a New Story

    1. Create a new component in src/components/YourComponent.

    2. Add a .stories.js file in the same directory, e.g. YourComponent.stories.js:

        import React from 'react';
        import YourComponent from './YourComponent';

        export default {
            title: 'YourComponent',
            component: YourComponent,
        };

        const Template = (args) => <YourComponent {...args} />;

        export const Default = Template.bind({});
        Default.args = {
            // Default props for the component
        };
    
    3. Run npm run storybook to see your new story.

Folder Structure

    StoryBookReact/
    ├── .storybook/          # Storybook configuration
    ├── public/              # Static assets
    ├── src/
    │   ├── components/      # React components and stories
    │   ├── App.js           # Main application file
    │   ├── index.js         # Entry point
    │   └── ...              # Other source files
    ├── package.json         # Project metadata and dependencies
    └── README.md            # Documentation

Contributing

    Contributions are welcome! Please follow these steps to contribute:

        1. Fork the repository.
        2. Create a new branch: git checkout -b feature/your-feature-name.
        3. Commit your changes: git commit -m 'Add some feature'.
        4. Push to the branch: git push origin feature/your-feature-name.
        5. Open a pull request.

Happy coding! 🎉