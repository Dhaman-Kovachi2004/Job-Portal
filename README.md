# Job Portal Web Application

## Overview

The Job Portal web application allows job seekers to sign up, upload their resumes, and receive confirmation of their successful registration. This application is built with a React frontend and an Express.js backend, using PostgreSQL for database management.

## Features

- **User Registration**: Users can sign up by providing their name, email, and uploading a resume.
- **Resume Upload**: Users can upload their resumes in PDF format.
- **Success Page**: After successful registration, users are redirected to a confirmation page.

## Architecture

### Frontend

- **Framework**: React
- **Styling**: Tailwind CSS
- **Routing**: `react-router-dom`
- **State Management**: `useState` for managing form data and responses

**Folder Structure:**

client/ │ ├── public/ │ ├── index.html │ └── ... │ ├── src/ │ ├── pages/ │ │ ├── Home.jsx │ │ ├── SignUp.jsx │ │ └── SuccessPage.jsx │ ├── App.jsx │ └── index.js │ ├── .gitignore └── package.json


### Backend

- **Framework**: Express.js
- **File Handling**: `multer` for handling file uploads
- **Database**: PostgreSQL
- **Environment Variables**: Managed with `dotenv`

**Folder Structure:**

server/ │ ├── uploads/ │ └── ... (Uploaded resumes are stored here) │ ├── .env ├── index.js └── package.json



### Data Model

**Table: job_seekers**

- `id`: Primary Key, Auto-increment integer
- `name`: String, User's name
- `email`: String, User's email (unique)
- `resume`: String, Filename of the uploaded resume

### API Endpoints

- **POST /api/signup**
  - **Request Body**: 
    - `name`: String
    - `email`: String
    - `resume`: File (PDF)
  - **Response**:
    - Success: `{ "message": "Signup successful" }`
    - Error: `{ "error": "Error message" }`

### Development

To run the application locally:

1. **Frontend**
   - Navigate to the `client` directory.
   - Install dependencies: `npm install`
   - Run the development server: `npm start`

2. **Backend**
   - Navigate to the `server` directory.
   - Install dependencies: `npm install`
   - Run the server: `npm start`

### Deployment

- **Frontend**: Deployed on Netlify. The build command is `npm run build`, and the publish directory is `client/dist`.
- **Backend**: Deployed on Render or similar platform. The backend handles API requests and file uploads.

### Troubleshooting

- **CORS Issues**: Ensure that the CORS settings in the backend are configured to allow requests from the frontend domain.
- **Build Errors**: Check the `build` and `publish` directories. Ensure that the correct paths are specified in Netlify configuration.

### Contributing

Feel free to contribute by submitting issues or pull requests. Please ensure that your contributions adhere to the project's coding standards and guidelines.


