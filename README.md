# About
To be filled out soon.

# Installation

## Yarn

We'll be using Yarn for package management instead of npm.
Use Homebrew to install yarn

```
brew install yarn
```

# The Backend

## MongoDB

```

brew install mongodb
```

Wait for installation to finish. Then:

```
> cd

> mkdir data

> cd data

> mkdir db
```

(May need to run as `sudo`)

### Running the DB

```
mongod
```

(or `sudo mongod`)

## Node

To install the backend packages, run the following in the root folder:

```
yarn install
```

# The Frontend - Angular.io

To install frontend packages, please go to the /public/ folder and:

```
yarn install
```

# Running the environment

Instead of 1 window with all services running this project builds separately, for each task. So, feel free to run each in its own Terminal window

- `mongod`
- `node server.js`
- `/foodsnap/public > ng build -w`
