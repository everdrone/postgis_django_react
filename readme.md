# PostGIS + Django GDAL + React

## Initialize boilerplate

```sh
./init.sh
```

### Allow Hosts

##### server/settings.py

```py
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]
```

> Remember to place `corsheaders.middleware.CorsMiddleware` **BEFORE** `CommonMiddleware`!

```py
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]
```

```py
ALLOWED_HOSTS = ['localhost']
```

### Set PostGIS connector

##### server/settings.py

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'USER': 'postgres',
        'NAME': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}
```

## Building and running

```sh
docker-compose build
docker-compose up
```

## Apply migrations

```sh
docker exec server python manage.py migrate
```
