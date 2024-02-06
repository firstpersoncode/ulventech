## Prerequisites:
- Docker
- Browser
- Postman or any other tool to make HTTP requests

## Setup
- Clone this repo `git clone git@github.com:firstpersoncode/ulventech.git`
- Build the container `docker compose build`
- Then run the images:
    - database: `docker compose up -d ulventech_db`
    - backend: `docker compose up -d ulventech_backend`
    - frontend: `docker compose up -d ulventech_frontend`
- Then open in your browser `http://localhost:3000`