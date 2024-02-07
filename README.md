## Prerequisites:
- Docker
- Browser
- Postman or any other tool to make HTTP requests

## Setup
- Clone this repo `git clone git@github.com:firstpersoncode/ulventech.git`
- Activate .env files:
    - Database `ulventech/.env.sample` -> `ulventech/.env`
    - Backend `ulventech/backend/.env.sample` -> `ulventech/backend/.env`
    - Frontend `ulventech/frontend/.env.sample` -> `ulventech/frontend/.env`

- Build the container
```bash
$ docker compose build
```
#### Note: If you have lower memory on your hardware, try building the images one by one in this exact order:
```bash
$ docker compose build ulventech_db
$ docker compose build ulventech_backend
$ docker compose build ulventech_frontend
```
    
#### Then run the images:
```bash
$ docker compose up -d ulventech_db
$ docker compose up -d ulventech_backend
$ docker compose up -d ulventech_frontend
```

---
### (NestJS) User Authentication with Admin and Customer roles
- Endpoint [http://localhost:8000/api/app/v1](http://localhost:8000/api/app/v1)
- Documentation [https://app.swaggerhub.com/apis/firstpersoncode/ulventech/1.0.0](https://app.swaggerhub.com/apis/firstpersoncode/ulventech/1.0.0)
- Source `ulventech/backend`


### (NextJS) Dynamic form
- Url [http://localhost:3000](http://localhost:3000)
- Source `ulventech/frontend`
- Activate .env file `ulventech/frontend/.env.sample` -> `ulventech/frontend/.env`
