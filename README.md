# Clow Cards

This is a cartomancy simulator which uses the [Clow deck](https://ccsakura.fandom.com/wiki/Clow_Cards) to perform divination. If you want a sneak peek on whatever the future holds for you, **Clow Cards** is just what you're looking for!

## Table of Contents

-  [About](#about)
-  [Features](#features)
-  [Installation and Usage](#installation-and-usage)

## About

The **Clow Cards** is a MERN stack application being developed as part of the *Web Development Fundamentals* subject that I'm taking during my graduation course.

> **MERN** is an acronym to MongoDB, Express, React and Node.

## Features

### **Meet the Cards**

This page lists the Clow Cards in the deck. It has the following features:

- Filter and reorder the list (using the sidebar) based on cards characteristics, such as name or sign.
- Choose the number of cards showed per page (using the list header).
- See detailed information of each Clow Card (by clicking it).
- Search for a specific card by name (using the search bar).

![Meet the Cards](https://i.imgur.com/ljCclpo.png)

### **Your Readings**

> :heavy_exclamation_mark: Only registered users can access this feature.

This page allows you to see  the list of your card readings and to get new ones using the Clow Cards. It has the following features:

- Get a new card reading (using the upper button) with the meaning of all the selected cards available when you click on them.
- If you want, add personal comments on your card readings.

![Your Readings](https://i.imgur.com/vbtWrdI.png)

### **Card of the Day**

This page allows you to get the Clow Card of the day. It has the following features:

- See the Clow Card of the current day.
- See detailed informations of the Clow Card of the day, including its meaning.

![Card of the Day](https://i.imgur.com/t5URvJs.png)

## Installation and Usage

> :small_red_triangle_down: Before proceeding from here, make sure your system has **[Node.js](https://nodejs.org/en/)** and **[Yarn](https://yarnpkg.com/)** (or **[NPM](https://www.npmjs.com/)**) installed on it.


#### Clone the repository

Obviously, the first step to use the **Clow Cards** is cloning the repository to your device. You can do it by using the commands below (or using the GitHub interface itself).

```sh
git clone https://github.com/alvesmatheus/clow-cards.git
cd clow-cards
```

#### Configure the database

> If you want a more detailed explanation on this step, read this [guide](https://docs.atlas.mongodb.com/getting-started/).

Create a new file named `.env` with the same fields contained in the `.env.example` file. This new file will be used to  set up the environment variables that will link the database with the **Clow Cards** application. To do this, you'll need to follow the steps below.

1. On [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) website, access (or create) your own account.
3. Deploy a free tier cluster on your MongoDB Atlas account.
4. Whitelist your connection IP address in this cluster (more details [here](https://docs.atlas.mongodb.com/tutorial/whitelist-connection-ip-address/)).
5. Create a database user to guarantee access to your cluster (more details [here](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/)).
6. On your cluster, click on ***Connect*** and then on ***Connect Your Application***.
7. Select ***Node.js*** as your ***Driver*** and copy the given ***Connect String Only*** value.
8. On the `.env` file, replace this ***Connect String Only*** as the value to `DATABASE_URI` field.

And... It's done! The **Clow Cards** has access to your database and you're ready to use it! 

#### Start the application

Once the database configuration is complete, you'll need to install the dependencies. To do this, run the following command.

```sh
yarn install
```

After the dependencies are completely installed, you'll need to run the following command in `client` and `server` directories separately.

```sh
yarn start
```

Now, you just need to access your `http://localhost:3000`!