[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

[![react](https://img.shields.io/badge/MADE%20WITH-REACT-informational?style=for-the-badge)](https://icons8.com/icon/123603/react-native)
[![Made by](https://img.shields.io/badge/MADE%20BY-SYLVAIN%20CROS-orange?style=for-the-badge)](https://github.com/Syl20cros)

## SportSee : **The most powerful sport coaching**

SportSee your day-to-day sport progress companion


## 1. Project

### 1.1 Prerequisites

IDE like [Visual Studio Code](https://code.visualstudio.com/)

### 2.2 Launching project

 - `npm install`

 - `npm start`

## 2. Backend project

[Backend repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

This repo contains all the source code to run the micro API for the sports analytics dashboard.

### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- IDE like [Visual Studio Code](https://code.visualstudio.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the backend project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

### 2.3. Endpoints

#### 2.3.1 Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

#### 2.3.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

## 3. Update documentation

### `npm run doc`

Use [Jsdoc](https://jsdoc.app/index.html) and [better-docs](https://github.com/SoftwareBrothers/better-docs) to comment the code to keep the documentation up to date.

## 4. Libreries

- [Axios](https://www.npmjs.com/package/axios) - Free API resquest library.
- [Recharts](https://recharts.org/en-US/) - Library for manipulating documents based on data.