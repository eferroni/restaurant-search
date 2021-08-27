# Setup restaurant search project

## Installation

_Check python3 version using python --version or python3 --version.Make sure python3.8 is installed in system pre commit checks python3.8 and create virtual environment for python3.8_

_follow link for python installation_
for [windows](https://www.python.org/downloads/)
for [linux or mac](https://linuxize.com/post/how-to-install-python-3-9-on-ubuntu-20-04/)

follow link for installtion and creation of virtual environment
[linux or mac](https://gist.github.com/Geoyi/d9fab4f609e9f75941946be45000632b)
[windows](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
_create virtual environment_

```
virtualenv env
```

Make sure project and virtual environment should be on same level

_Activate environment_

```
source env/bin/activate
```

_Now change directory to project_

```
cd project_folder_name
```
_Before installing packages make sure your pip is up to date install it by_ or [follow this link](https://pip.pypa.io/en/stable/installing/)
```
pip install --upgrade pip
```
_Time to install dependencies (It will take a while)_
```
pip install -r requirements.txt
```


_Create table in database_
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
