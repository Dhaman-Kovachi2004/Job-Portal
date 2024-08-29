# Job Portal

A full-stack web application for job seekers to sign up, upload resumes, and apply for jobs. This application is built using React for the front-end and Node.js with Express for the back-end. PostgreSQL is used for database management.

## Features

- **Home**: Welcome Page for the Website.
- **Job SignUp**:In this Page, Users can write their information and upload their resumes in PDF format, which are securely stored on the server.
- **SuccessPage**: After the Form Completion is Successful , It will redirect to this page.

## Architecture

### Front-End (React)
- **Components**: The application consists of reusable React components, such as `SignUp.jsx`, `Home.jsx`,`SuccessPage.jsx` etc.
- **Routing**: Handled by `react-router-dom` with routes for Home, Sign Up, and Success pages.

### Back-End (Express)
- **API**: Provides endpoints for user registration and resume uploads.
- **Database**: PostgreSQL stores user information and resume file paths.

### Database Schema

- **Job_Seeker Table**: Stores user details such as name, email and resume.


## Installation

### Prerequisites

- Node.js
- PostgreSQL

### Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/job-portal.git
    cd job-portal
    ```

2. **Set up the front-end**:

    ```bash
    cd client
    npm install
    npm run dev
    ```

3. **Set up the back-end**:

    ```bash
    cd server
    npm install
    npm run dev
    ```

4. **Configure environment variables**:

    Create a `.env` file in the `server/` directory with the following content:

    ```bash
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=job_portal
    ```

5. **Run the back-end server**:

    ```bash
    node server.js
    ```

6. **Visit the application**:

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Documentation

### POST /api/signup

Registers a new user.

- **Request**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "resume":File.pdf
    }
    ```

- **Response**:
    ```json
    {
      "message": "User signed up successfully!",
      "userId": 1
    }
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute.


