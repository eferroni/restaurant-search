# Setup restaurant search project

## Overview
This tool is created to users search for the best restaurants with 5 selection filters.


## Installation

First, create a folder, and start by cloning the repository into this new folder:

```
https://github.com/eferroni/restaurant-search.git
```

I recommend to use python venv module.
Link for installtion and creation of virtual environment:
[linux or mac](https://gist.github.com/Geoyi/d9fab4f609e9f75941946be45000632b),
[windows](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)


- Start by creating a new virtual environment

```
python3 -m venv env
```

Make sure your project and the virtual environment are at the same level


- Once installed, activate the virtual environment

```
source env/Scripts/activate
```

- Install the python dependencies on the virtual environment


```
pip install -r requirements.txt
```

- Create tables in database

```
python manage.py migrate
```

_If the requirements are successfully installed, it's time to Setup React_


## Setup react
**React require node.js as prerequisite. Download node.js version 14.16.0 LTS or higher (recommended)**
Link for [linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04). Link
for [windows](https://nodejs.org/en/),  follow official site of node.js

- Open a new prompt and access the frontend directory
```
cd frontend
```

- Run the following command to install react packages
```
yarn install
```


### To start project

- Starting the backend:

```
python manage.py runserver
```

- Starting the frontend:
```
yarn start
```

This command will start the server and the project will be accessed throw:

```
http://localhost:3000/
```

Once you access, it will automatically verify if the detas are empty, and fill it with the data from csv if necessary.
