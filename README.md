> :warning: **Warning:** This is a work-in-progress project, any of the information below can be modified at any time.

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

> :small_red_triangle_down: This section will be restructured with more details as the application development proceeds.

- List the cards from the Clow deck.
- Filter cards by their characteristics.
- Visualize characteristics of each Clow Card.
- Get the *Card of the Day* using the Clow deck.
- Get card readings (*cartomancy*) using the Clow deck.
- Add personal comments to the given readings.
- Visualize the previous readings and their details.

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