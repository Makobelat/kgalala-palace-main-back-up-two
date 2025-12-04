# Event Poster App

## Overview
The Event Poster App is a web application that allows users to manage events and their associated posters. Users can register, log in, and edit event details and posters through a secure interface.

## Features
- User authentication (registration and login)
- Event management (create, read, update, delete events)
- Poster management (upload, retrieve, delete posters)
- Middleware for authentication and authorization

## Project Structure
```
event-poster-app
├── src
│   ├── index.ts               # Entry point of the application
│   ├── auth                   # Authentication related files
│   │   ├── login.ts           # User login functionality
│   │   ├── register.ts        # User registration functionality
│   │   └── middleware.ts      # Authentication and authorization middleware
│   ├── events                 # Event management related files
│   │   ├── controller.ts      # Event controller
│   │   ├── routes.ts          # Event routes
│   │   └── service.ts         # Event service for database interactions
│   ├── posters                # Poster management related files
│   │   ├── controller.ts      # Poster controller
│   │   ├── routes.ts          # Poster routes
│   │   └── service.ts         # Poster service for database interactions
│   ├── types                  # Type definitions
│   │   └── index.ts           # User, Event, and Poster interfaces
│   └── database               # Database connection
│       └── connection.ts      # Database connection function
├── package.json               # NPM configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd event-poster-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Access the application at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.