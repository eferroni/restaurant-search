# Setup restaurant search project

## Overview
This tool is created to users search for the best restaurants with 5 selection filters.


## Installation

First, create a folder, and start by cloning the repository into this new folder:

```
https://github.com/eferroni/restaurant-search.git
```

We recommend to use python venv module for development.
Link for installtion and creation of virtual environment
[linux or mac](https://gist.github.com/Geoyi/d9fab4f609e9f75941946be45000632b),
[windows](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)


- Start by creating a new virtual environment

```
python3 -m venv env
```

Make sure project and virtual environment should be on same level


- Once installed access, enable the virtual environment

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

_If requirements install sucessfully, this time to load some data write below commands to install fixtures one by one_


### To start project

```
python manage.py runserver
```

- This command will start server or follow (if server started successfully)

```
http://127.0.0.1:8000/
```


## Setup react
**React require node.js as prerequisite node.js higher 14.16.0 LTS(recommended)**
for [linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) follow link
for [windows](https://nodejs.org/en/) follow official site of node.js
_Change to directory to frontend_
```
cd frontend
```

_Run following command to install react packages_
```
yarn install
```

_To start react server_
```
yarn start
```
