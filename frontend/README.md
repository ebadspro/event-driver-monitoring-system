# Academic Web Application

A fully static React Native Web academic application demonstrating navigation and page layouts. This project uses React Native Web components along with `react-router-dom` for client-side routing, allowing a mobile-style UI to run seamlessly in the browser.

## Features

- Home page with welcome message
- Courses page displaying a static list of courses
- Students page displaying a static list of students
- Services page listing academic services
- Responsive navigation bar implemented with React Native Web components and React Router
- Fully static, no backend required
- Built with Webpack and Babel for React Native Web compatibility
- Unit tests using Jest and React Testing Library

## Prerequisites

- Node.js (version 16 or above recommended)
- npm (comes with Node.js) or yarn

## Installation

1. Clone the repository or download the source code.

2. Navigate to the project directory:

    cd academic-web-app

3. Install dependencies:

    npm install

    Or with yarn:

    yarn install

## Configuration

- Copy `.env.example` to `.env` and update environment variables if needed.

    cp .env.example .env

- Currently, environment variables like `REACT_APP_API_URL` are placeholders for future backend integration and are unused in this static version.

## Running the Application

### Development Server

Start the development server with hot reloading:

    npm start

or

    yarn start

Open your browser to [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

Build the optimized production bundle:

    npm run build

or

    yarn build

The production files will be in the `dist` folder. You can serve them with any static file server.

## Project Structure

