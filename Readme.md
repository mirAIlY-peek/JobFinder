# MERN Job Finder

This is a Job Finder application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to register, login, update their profiles, search and apply for jobs, and allows admin users to manage jobs and view responses.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Axios
- Multer
- JWT for authentication


Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    PORT=5000
    MONGO_URL=<your-mongodb-url>
    JWT_SECRET=<your-jwt-secret>
    JWT_EXPIRE_TIME=<your-jwt-expiry-time>
    ```


## Installation

### Backend

1.
```bash
cd backend
   ```


2
```bash
npm install
   ```

3
```bash
npm run dev
   ```


### Frontend

1.
```bash
cd client
   ```


2
```bash
npm install
   ```

3
```bash
npm start
   ```

## API Endpoints

### Auth

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login a user
- `PATCH /api/v1/auth/updateUser` - Update user profile

### Jobs

- `GET /api/v1/jobs` - Get all jobs with search and filter options
- `POST /api/v1/jobs` - Create a new job (admin only)
- `PATCH /api/v1/jobs/:id` - Update a job (admin only)
- `DELETE /api/v1/jobs/:id` - Delete a job (admin only)

### Responses

- `POST /api/v1/responses` - Create a response to a job
- `GET /api/v1/responses/all` - Get all responses (admin only)




## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

by Miras)

