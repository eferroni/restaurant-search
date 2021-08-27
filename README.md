# Setup restaurant search project

## Overview
This tool is created to users search for the best restaurants with 5 selection filters.


## Installation

First, create a folder, and start by cloning the repository into this new folder:

```
https://github.com/eferroni/restaurant-search.git
```

We recommend to use python venv module for development.
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
source venv/bin/activate
```

- Install the python dependencies on the virtual environment


```
pip install -r requirements.txt
```

- Create tables in database

```
python manage.py migrate
```

_If the requirements are successfully installed, it's time to Setup React


## Setup react
**React require node.js as prerequisite node.js higher 14.16.0 LTS(recommended)**
Link for [linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04). Link
for [windows](https://nodejs.org/en/),  follow official site of node.js

_Open a new prompt and access the frontend directoy_ 
```
cd frontend
```

_Run the following command to install react packages_
```
yarn install
```


### To start project

_To start the backend:_

```
python manage.py runserver
```

_To start frontend:_
```
yarn start
```

- This command will start the server and the project will be accessed throw:

```
http://localhost:3000/
```


