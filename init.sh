#!/bin/bash

echo "Deactivate any virtualenv"
deactivate 2>/dev/null

# save dockerfile contents
echo "Saving server Dockerfile"
SERVER_DOCKERFILE=$(cat server/Dockerfile)

# start clean
echo "Cleaning server directory"
rm -rf server/*

# write dockerfile
echo "Restoring server Dockerfile"
echo "$SERVER_DOCKERFILE" >server/Dockerfile

echo "Download wait-for-it.sh"
curl https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -o server/wait-for-it.sh
chmod +x server/wait-for-it.sh

cd server

# create virtual environment
echo "Initializing virtualenv"
python3 -m venv venv

# activate virtualenv
source venv/bin/activate

# install deps (graphene is optional)
echo "Installing django and deps"
pip install \
	django \
	graphene-django \
	django-filter \
	django-environ \
	django-cors-headers \
	psycopg2-binary

echo "Saving into requirements.txt"
pip freeze >requirements.txt

echo "Initializing django project"
django-admin startproject server .

cd ../

#################################### REACT

# save dockerfile contents
echo "Saving webapp Dockerfile"
WEBAPP_DOCKERFILE=$(cat webapp/Dockerfile)

# start clean
echo "Cleaning webapp directory"
rm -rf webapp/*

# create react app
echo "Initializing react app"
npx create-react-app ./webapp

# write dockerfile
echo "Restoring webapp directory"
echo "$WEBAPP_DOCKERFILE" >webapp/Dockerfile
