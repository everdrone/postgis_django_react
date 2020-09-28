# PostgreSQL + Django + React

### Django Initialization

```sh
# save dockerfile contents
SERVER_DOCKERFILE=$(cat server/Dockerfile)

# start clean
rm -rf server/*

# write dockerfile
echo $SERVER_DOCKERFILE > server/Dockerfile

cd server

# create virtual environment
python -m venv venv

# activate virtualenv
source venv/bin/activate

# install deps (graphene is optional)
pip install \
  django \
  graphene-django \
  django-filter \
  django-environ \
  django-cors-headers \
  psycopg2
```

### React initialization

```sh
# save dockerfile contents
WEBAPP_DOCKERFILE=$(cat webapp/Dockerfile)

# start clean
rm -rf webapp/*

# create react app
npx create-react-app ./webapp

# write dockerfile
echo $WEBAPP_DOCKERFILE > webapp/Dockerfile
```

### Build

```sh
docker-compose build
docker-compose up
```
