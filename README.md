# MoneyPe

## Overview
MoneyPe is a simple web application that allows users to transfer fake money between accounts. This project serves as a foundational app demonstrating key concepts such as database integration, authentication, and input validation.

## Features
- **Money Transfers**: Send fake money from your account to a friend's account.
- **MongoDB Integration**: Transactions are stored in a MongoDB database.
- **Search & Filter**: Use MongoDB queries to filter and search transactions.
- **Authentication**: Secured with JSON Web Token (JWT).
- **Local Storage**: Stores JWT tokens locally for session management.
- **Input Validation**: Uses the Zod library for secure and structured validation.
- **Docker Compose**: Runs all necessary containers (backend, database, etc.) seamlessly.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Docker)
- **Authentication**: JWT
- **Validation**: Zod
- **Containerization**: Docker, Docker Compose

## Installation & Setup
### Prerequisites
- Install [Docker](https://www.docker.com/) and ensure Docker Compose is available.

### Running the App
1. Clone the repository:
   ```sh
   git clone https://github.com/radheyyyyyy/MoneyPe.git
   cd MoneyPe
   ```
2. Start all containers using Docker Compose:
   ```sh
   docker-compose up --build
   ```
3. The application should now be running at:
   - **Backend**: `http://localhost:5000`
   - **Frontend**: `http://localhost:5173`
   
4. Stop the services:
   ```sh
   docker-compose down
   ```

## API Endpoints
### Authentication
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| POST   | `/v1/api/user/signup` | User registration (JWT)      |
| GET    | `/v1/api/user/login`  | User login (JWT, requires authMiddleware) |
| PUT    | `/v1/api/user/update` | Update user details (requires JWT) |

### Account Management
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| GET    | `/v1/api/account/balance` | Get user balance (requires JWT) |
| POST   | `/v1/api/account/transfer` | Transfer money to another user (requires JWT) |

### User Search & Filtering
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| GET    | `/v1/api/user/bulk?f=<query>` | Search users by first or last name |

## Notes
- This app is **not responsive** but demonstrates essential backend integration concepts.
- Designed for **learning and experimentation** with MongoDB and authentication.

## Contributing
Feel free to fork the repository and submit pull requests for improvements!




