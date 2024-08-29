# Job Portal

A full-stack web application for job seekers to sign up, upload resumes, and apply for jobs. This application is built using React for the front-end and Node.js with Express for the back-end. PostgreSQL is used for database management.

## Features

- **User Registration**: Users can sign up by providing personal details and selecting their interest (Web Development, Android Development, Machine Learning).
- **Resume Upload**: Users can upload their resumes in PDF format, which are securely stored on the server.
- **Apply for Jobs**: Users can view different sections and apply for jobs related to their interests.

## Architecture

![Architecture Diagram](architecture-diagram.png)

### Front-End (React)
- **Components**: The application consists of reusable React components, such as `SignUp.js`, `Home.js`, etc.
- **Routing**: Handled by `react-router-dom` with routes for Home, Sign Up, and Success pages.

### Back-End (Express)
- **API**: Provides endpoints for user registration and resume uploads.
- **Database**: PostgreSQL stores user information and resume file paths.

### Database Schema

- **Users Table**: Stores user details such as name, email, phone number, interest, and hashed passwords.
- **Resumes Table**: Stores the file paths of uploaded resumes linked to the user.

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
    npm start
    ```

3. **Set up the back-end**:

    ```bash
    cd server
    npm install
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
      "phone": "1234567890",
      "interest": "web-development",
      "password": "securepassword"
    }
    ```

- **Response**:
    ```json
    {
      "message": "User registered successfully!",
      "userId": 1
    }
    ```

### POST /api/upload-resume

Uploads a user's resume.

- **Form Data**:
    - `userId`: The ID of the user.
    - `pdfFile`: The PDF file of the resume.

- **Response**:
    ```json
    {
      "message": "Resume uploaded successfully!"
    }
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
