# Description

Application made to Rocketseat GoStack Certification.

Meetapp is an application made to create and manage your own meetups. Later, anyone who likes your meetup purpose can subscribe and participate with you

# Screenshots

# ![mobile1](./screenshots/mobile1.png)

### ![mobile2](./screenshots/mobile2.png)

### ![mobile3](./screenshots/mobile3.png)

### ![mobile4](./screenshots/mobile4.png)

### ![mobile5](./screenshots/mobile5.png)

### ![web1](./screenshots/web1.png)

### ![web3](./screenshots/web3.png)

### ![web4](./screenshots/web4.png)

## ![web2](./screenshots/web2.png)

<hr/>

# Installation

Requirements:
NodeJS
Yarn
Postgres
Redis

## Application Server

```
$ cd meetapp-backend/

# Install dependencies
$ yarn install

# Run Migration
$ yarn sequelize db:migrate

Make sure you set .env variables (see .env.example)

# Start development server
$ yarn dev

run '$ yarn queue' to use mailing service
```

## WEB Application

```
$ cd meetapp-web/

$ yarn install

# Start development server
$ yarn start
```

## Mobile Application

```
$ cd meetapp-mobile/

# Install dependencies
$yarn install

(Mobile application tested only on Android System)


$ yarn android

# Start development server
$ yarn start
```
